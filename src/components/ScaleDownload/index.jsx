import React,{useState,useRef} from "react";
import axios from "axios";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {CONSENT_VERSION,CONSENT_TEXT,readLeadConfig,needsConsentPrompt,validIdentity,registerNativeDownload} from "./leadCapture.mjs";

const STORAGE_KEY="econsult_scale_lead";
function readSaved(){
 try{
  const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");
  return validIdentity(data?.nome,data?.email)?data:null;
 }catch{return null;}
}
function sameIdentity(saved,nome,email){
 return saved&&saved.nome.trim()===nome&&saved.email.trim().toLowerCase()===email.toLowerCase();
}
function saveUsage(nome,email,promptCompleted){
 try{
  const current=readSaved();
  const previous=sameIdentity(current,nome,email)?current:null;
  const count=Number.isSafeInteger(previous?.usos)&&previous.usos>=0?previous.usos:0;
  const showInvite=count+1>=5&&!previous?.conviteFreeExibido;
  // Marcador local indica somente que a opção foi apresentada e concluída;
  // jamais é utilizado como autorização para comunicações futuras.
  localStorage.setItem(STORAGE_KEY,JSON.stringify({
   nome,email,usos:count+1,conviteFreeExibido:Boolean(previous?.conviteFreeExibido||showInvite),
   conviteWhatsappExibido:Boolean(previous?.conviteWhatsappExibido),
   ...(promptCompleted||previous?.consentPromptVersion===CONSENT_VERSION?{consentPromptVersion:CONSENT_VERSION}:{})
  }));
  return showInvite;
 }catch{return false;}
}

export default function ScaleDownload({file,scale,label="Baixar escala em PDF"}){
 const {siteConfig}=useDocusaurusContext();
 const config=readLeadConfig(siteConfig.customFields);
 const [form,setForm]=useState({nome:"",email:""});
 const [showForm,setShowForm]=useState(false),[showFreeInvite,setShowFreeInvite]=useState(false);
 const [accepted,setAccepted]=useState(false),[error,setError]=useState(""),[loading,setLoading]=useState(false);
 const inFlight=useRef(false);
 function handleChange(e){
  const {name,value}=e.target;
  setForm(old=>({...old,[name]:value}));setAccepted(false);setError("");
 }
 async function registerDownload(nome,email,consent){
  try{
   if(config.enabled){
    await registerNativeDownload({post:axios.post,host:config.host,scale,nome,email,accepted:consent,consentEnabled:config.consentEnabled});
   }else{
    await axios.post(
                "https://econsultapp.com/usescale",
                {
                    nome,
                    email,
                    escala: "Download de " + scale,
                    documento: "Download de " + scale,
                },
                {
                    mode: "cors",
                    headers: {
                        "x-custom-header": JSON.stringify({
                            idusuario: 0,
                            idespecialista: 0,
                            token: "$2b$06$39fmkuhXjZN2OUsPW4ctO.snb.yNUGGGPlyS7..LtvuH61VAwgJam",
                            tokensystem: "$2b$06$39fmkuhXjZN2OUsPW4ctO.snb.yNUGGGPlyS7..LtvuH61VAwgJam",
                        }),
                    },
                }
            );
   }
   return true;
  }catch{
   // Não registrar dados pessoais, payload, cabeçalhos ou tokens no console.
   console.warn("Não foi possível registrar a utilização do material.");
   return false;
  }
 }
 function downloadFile(){
  const link=document.createElement("a");
  link.href=file;link.download="";link.target="_blank";link.rel="noopener noreferrer";
  document.body.appendChild(link);link.click();link.remove();
 }
 async function performDownload(nome,email,consent,formSubmitted){
  if(inFlight.current)return;
  inFlight.current=true;setLoading(true);
  try{
   const registered=await registerDownload(nome,email,consent);
   const promptCompleted=config.consentEnabled&&formSubmitted&&(!consent||registered);
   if(saveUsage(nome,email,promptCompleted))setShowFreeInvite(true);
   // Falha comercial não impede o acesso ao arquivo.
   downloadFile();setShowForm(false);setAccepted(false);
  }finally{inFlight.current=false;setLoading(false);}
 }
 async function handleDownload(e){
  e.preventDefault();setError("");
  const nome=form.nome.trim(),email=form.email.trim();
  if(!validIdentity(nome,email)){setError("Informe seu nome completo e um e-mail válido (até 200 caracteres).");return;}
  await performDownload(nome,email,config.consentEnabled&&accepted,true);
 }
 function handleButtonClick(){
  if(inFlight.current)return;
  const saved=readSaved();
  if(!saved||needsConsentPrompt(saved,config)){
   setForm({nome:saved?.nome??"",email:saved?.email??""});
   setAccepted(false);setError("");setShowForm(true);
  }else{
   // Dados salvos não autorizam nenhum novo aceite.
   performDownload(saved.nome.trim(),saved.email.trim(),false,false);
  }
 }
 if(!showForm)return <>
  <button type="button" className="button button--primary button--lg" onClick={handleButtonClick} disabled={loading}>📥 {loading?"Aguarde...":label}</button>
  {showFreeInvite&&<div className="scale-free-invite">
   <button type="button" className="scale-free-invite-close" onClick={()=>setShowFreeInvite(false)} aria-label="Fechar">×</button>
   <div className="scale-free-invite-icon">🎉</div>
   <h3>Você já conhece o eConsult Free?</h3>
   <p>Você já utiliza nossas ferramentas com frequência.</p>
   <p>No <strong>eConsult Free</strong> você pode organizar pessoas atendidas, agenda, prontuário, financeiro e acompanhamento clínico em um único sistema.</p>
   <div className="scale-free-invite-actions">
    <a href="https://econsult.app.br/sistema-gratuito-para-psicologos" className="button button--primary" target="_blank" rel="noopener noreferrer">Conhecer o eConsult Free</a>
    <button type="button" className="button button--secondary" onClick={()=>setShowFreeInvite(false)}>Agora não</button>
   </div>
  </div>}
 </>;
 return <div className="scale-download">
  <h3>Baixe gratuitamente</h3>
  <p>Informe seus dados abaixo para fazer o download deste material.</p>
  <form onSubmit={handleDownload}>
   <div className="scale-download-field">
    <label>Nome completo<input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome completo" autoComplete="name" maxLength={200} required disabled={loading}/></label>
   </div>
   <div className="scale-download-field">
    <label>E-mail<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" autoComplete="email" maxLength={200} required disabled={loading}/></label>
   </div>
   {config.consentEnabled&&<label className="scale-download-consent" style={{display:"flex",alignItems:"flex-start",gap:8,margin:"12px 0",fontSize:13,lineHeight:1.5}}>
    <input type="checkbox" checked={accepted} onChange={e=>setAccepted(e.target.checked)} disabled={loading} style={{width:17,height:17,flex:"0 0 17px",marginTop:2,accentColor:"#008b80"}}/>
    <span>{CONSENT_TEXT}<small style={{display:"block"}}>Opcional. Não é necessário aceitar para baixar o material.</small></span>
   </label>}
   {error&&<div className="scale-download-error" role="alert">{error}</div>}
   <div className="scale-download-actions">
    <button type="submit" className="button button--primary" disabled={loading}>{loading?"Aguarde...":label}</button>
    <button type="button" className="button button--secondary" disabled={loading} onClick={()=>{setShowForm(false);setAccepted(false);}}>Cancelar</button>
   </div>
  </form>
  <small>Seus dados serão utilizados para registrar o acesso ao material. Comunicações promocionais dependem de autorização facultativa. Consulte a <a href="https://econsult.app.br/politica-de-privacidade">Política de Privacidade</a>.</small>
 </div>;
}
