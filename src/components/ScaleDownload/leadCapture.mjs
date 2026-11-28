export const CONSENT_VERSION="EMAIL_MARKETING_V1";
export const CONSENT_TEXT="Aceito receber conteúdos, novidades e informações sobre o eConsult por e-mail. Posso cancelar o recebimento a qualquer momento.";
const SCALE_CODES=new Set("PHQ_9 GAD_7 SRQ_20 K10 DASS_21 AUDIT CAGE DAST_10 PSQI ESS WHODAS_2_0 SDQ PSC_17 WHOQOL_BREF SWLS RSES GSE PCL_5 IES_R ACE PSWQ MDQ MAAS PANAS CBI EC_ETE EC_ERA EC_EDC EC_EAT EC_EPT EC_ERF EC_EAC EC_ECO EC_EPC EC_ERI EC_ERE EC_EFC EC_EAF EC_EVI".split(" "));
const RECORDS=new Map([
 ["Modelo de Prontuário Psicológico Individual","PRONTUARIO_INDIVIDUAL"],
 ["Modelo de Prontuário Psicológico para Casal","PRONTUARIO_CASAL"],
 ["Modelo de Prontuário Psicológico Familiar","PRONTUARIO_FAMILIAR"],
 ["Modelo de Prontuário para Grupo Terapêutico","PRONTUARIO_GRUPO"],
]);
export function downloadResource(scale){
 if(typeof scale!=="string")return null;
 for(const [title,resourceCode] of RECORDS)if(scale===title+" em PDF"||scale===title+" em Word")return {toolCode:"DOWNLOAD_DOCUMENTO",resourceCode};
 const code=scale.trim().toUpperCase().replace(/[ ._-]+/g,"_");
 return SCALE_CODES.has(code)?{toolCode:"DOWNLOAD_ESCALA",resourceCode:code}:null;
}
export function readLeadConfig(customFields={}){
 const enabled=customFields.LEAD_CAPTURE_ENABLED===true;
 return {enabled,consentEnabled:enabled&&customFields.LEAD_PUBLIC_CONSENT_ENABLED===true,host:customFields.LEAD_API_HOST==="http://localhost:3000"?"http://localhost:3000":"https://econsultapp.com"};
}
export function needsConsentPrompt(saved,config){
 return config.consentEnabled&&saved?.consentPromptVersion!==CONSENT_VERSION;
}
export function validIdentity(nome,email){
 return typeof nome==="string"&&nome.trim().length>0&&nome.trim().length<=200&&typeof email==="string"&&email.trim().length<=200&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email.trim());
}
export async function registerNativeDownload({post,host,scale,nome,email,accepted=false,consentEnabled=false,createEventId=()=>globalThis.crypto.randomUUID()}){
 const resource=downloadResource(scale);
 if(!resource||!validIdentity(nome,email))throw Error("Material não catalogado ou identificação inválida.");
 const body={name:nome.trim(),email:email.trim().toLowerCase(),...resource,eventId:createEventId(),...(consentEnabled&&accepted===true?{consentVersion:CONSENT_VERSION}:{})};
 const config={timeout:4000,headers:{"Content-Type":"application/json"},withCredentials:false};
 try{return await post(host+"/leads/capture",body,config);}
 catch(e){
  const status=e?.response?.status;
  if(e?.code==="ERR_CANCELED"||!(status===502||status===504||(!e?.response&&["ERR_NETWORK","ECONNABORTED","ETIMEDOUT","ECONNRESET"].includes(e?.code))))throw e;
  return post(host+"/leads/capture",body,config);
 }
}
