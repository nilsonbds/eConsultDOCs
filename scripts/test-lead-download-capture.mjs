import assert from "node:assert/strict";
import {readdirSync,readFileSync} from "node:fs";
import {join} from "node:path";
import {CONSENT_VERSION,CONSENT_TEXT,downloadResource,readLeadConfig,needsConsentPrompt,validIdentity,registerNativeDownload} from "../src/components/ScaleDownload/leadCapture.mjs";

assert.deepEqual(readLeadConfig(),{enabled:false,consentEnabled:false,host:"https://econsultapp.com"});
assert.equal(readLeadConfig({LEAD_PUBLIC_CONSENT_ENABLED:true}).consentEnabled,false);
const config=readLeadConfig({LEAD_CAPTURE_ENABLED:true,LEAD_PUBLIC_CONSENT_ENABLED:true,LEAD_API_HOST:"http://localhost:3000"});
assert.deepEqual(config,{enabled:true,consentEnabled:true,host:"http://localhost:3000"});
assert.equal(needsConsentPrompt({},config),true);
assert.equal(needsConsentPrompt({consentPromptVersion:CONSENT_VERSION},config),false);
assert.equal(needsConsentPrompt({},readLeadConfig()),false);
assert.match(CONSENT_TEXT,/cancelar o recebimento/);
assert.equal(validIdentity("Teste","TESTE@example.invalid"),true);
for(const [nome,email] of [["","a@b.com"],["Nome","a@b"],["Nome","a b@c.com"],["x".repeat(201),"a@b.com"]])assert.equal(validIdentity(nome,email),false);
assert.deepEqual(downloadResource("GAD-7"),{toolCode:"DOWNLOAD_ESCALA",resourceCode:"GAD_7"});
assert.deepEqual(downloadResource("WHODAS 2.0"),{toolCode:"DOWNLOAD_ESCALA",resourceCode:"WHODAS_2_0"});
for(const format of ["PDF","Word"])assert.deepEqual(downloadResource("Modelo de Prontuário Psicológico Individual em "+format),{toolCode:"DOWNLOAD_DOCUMENTO",resourceCode:"PRONTUARIO_INDIVIDUAL"});
assert.equal(downloadResource("INEXISTENTE"),null);
const uuid="550e8400-e29b-41d4-a716-446655440000",calls=[];
const args={post:async(...v)=>{calls.push(v);return {status:202};},host:config.host,scale:"GAD-7",nome:" Teste ",email:" TESTE@example.invalid ",createEventId:()=>uuid};
for(const [accepted,consentEnabled] of [[true,true],[true,false],[false,true],[false,false]]){
 calls.length=0;await registerNativeDownload({...args,accepted,consentEnabled});
 assert.equal(calls[0][0],config.host+"/leads/capture");
 assert.deepEqual(calls[0][1],{name:"Teste",email:"teste@example.invalid",toolCode:"DOWNLOAD_ESCALA",resourceCode:"GAD_7",eventId:uuid,...(accepted&&consentEnabled?{consentVersion:CONSENT_VERSION}:{})});
 assert.deepEqual(calls[0][2],{timeout:4000,headers:{"Content-Type":"application/json"},withCredentials:false});
}
calls.length=0;
await registerNativeDownload({...args,accepted:true,consentEnabled:true,post:async(...v)=>{calls.push(v);if(calls.length===1)throw Object.assign(Error("timeout"),{code:"ECONNABORTED"});return {status:202};}});
assert.equal(calls.length,2);assert.deepEqual(calls[0],calls[1]);
for(const status of [400,409,422,429,503]){
 calls.length=0;
 await assert.rejects(registerNativeDownload({...args,post:async(...v)=>{calls.push(v);throw Object.assign(Error("API"),{response:{status}});}}));
 assert.equal(calls.length,1);
}
calls.length=0;await assert.rejects(registerNativeDownload({...args,scale:"INEXISTENTE"}));assert.equal(calls.length,0);

function* walk(dir){for(const entry of readdirSync(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())yield* walk(path);else if(/\.mdx?$/i.test(entry.name))yield path;}}
let uses=0;const unique=new Set(),unmapped=[];
for(const dir of ["avaliacoes-clinicas","pratica-clinica","gestao-consultorio","modelos-de-documentos","docs","blog","i18n"]){
 for(const path of walk(dir)){
  const source=readFileSync(path,"utf8");
  for(const tag of source.matchAll(/<ScaleDownload\b[\s\S]*?\/>/g)){
   uses++;const scale=tag[0].match(/\bscale\s*=\s*["']([^"']+)["']/)?.[1];
   const mapped=downloadResource(scale);
   if(!mapped)unmapped.push({path,scale:scale??"prop dinâmica ou ausente"});else unique.add(mapped.toolCode+"/"+mapped.resourceCode);
  }
 }
}
assert.ok(uses>0,"Nenhum download localizado.");
assert.deepEqual(unmapped,[],"Downloads sem correspondência explícita no catálogo.");
const component=readFileSync("src/components/ScaleDownload/index.jsx","utf8");
assert.ok(component.includes("performDownload(saved.nome.trim(),saved.email.trim(),false,false)"));
assert.ok(component.includes("(!consent||registered)")&&component.includes("consentPromptVersion"));
assert.ok(component.includes("downloadFile();setShowForm(false);setAccepted(false)"));
assert.ok(component.includes("inFlight.current")&&component.includes("conviteFreeExibido"));
console.log("OK - flags, autorização facultativa, identidade, retry idempotente e ausência de fallback ambíguo.");
console.log("OK - "+uses+" downloads MD/MDX mapeados para "+unique.size+" recursos do catálogo.");
