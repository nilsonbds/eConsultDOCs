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
          <summary style={{ fontSize: "18px", marginTop: "1rem" }}>{f.pergunta}</summary>
          <p style={{ marginTop: "0px", marginBottom: "0px", color: "#808080ff", fontSize: "16px" }}>{f.resposta}</p>
          {f.more_details_url && (
            <a
              href={f.more_details_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "0px",
                fontWeight: 500,
                color: "#007bff",
                textDecoration: "none",
              }}
            >
              Mais detalhes →
            </a>
          )}
        </details>
      ))}
    </div>
  );
}
