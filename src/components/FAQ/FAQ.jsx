import React from "react";

// cria um contexto controlado (só JSONs dentro de docs/07_FAQ)
const faqContext = require.context("@site/docs/07_FAQ", true, /faq.*\.json$/);

export default function FAQ({ folder }) {
  let data = [];

  try {
    // encontra o caminho do arquivo correspondente à pasta
    const path = `./${folder}/faq.json`;    
    data = faqContext(path);
  } catch (e) {
    console.error("FAQ não encontrado para:", folder);
  }

  const faqs = data.filter((f) => f.public !== false);

  if (!faqs.length)
    return <p>Nenhuma pergunta disponível nesta categoria.</p>;

  return (
    <div>
      {faqs.map((f, i) => (
        <details key={i} className="faq-item">
          <summary style={{fontSize: "18px"}}>{f.pergunta}</summary>
          <p style={{ marginTop: "0.5rem", color: "#414141" }}>{f.resposta}</p>
        </details>
      ))}
    </div>
  );
}
