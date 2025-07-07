import React, { useState } from 'react';
import data from './json/anamneses.json';

export default function JsonListViewer() {
  return (
    <div>
      {data.map((especialidade, index) => {
        const slug = slugify(especialidade.tipo);
        return (
          <div key={index} style={styles.section}>
            <h2 id={slug} style={styles.tituloTipo}>
              {especialidade.tipo}
            </h2>
            {especialidade.modelos.map((modelo, i) => (
              <ModeloCard key={i} modelo={modelo} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function ModeloCard({ modelo }) {
  const [openTopics, setOpenTopics] = useState({});

  const toggleTopic = (index) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.tituloModelo}>{modelo.title}</h3>
      {modelo.topics.map((topic, i) => (
        <div key={i} style={styles.topic}>
          <div onClick={() => toggleTopic(i)} style={styles.topicHeader}>
            <strong>{topic.title}</strong> {openTopics[i] ? '▲' : '▼'}
          </div>
          {openTopics[i] && (
            <ul style={styles.listaCampos}>
              {topic.children.map((child, j) => (
                <li key={j} style={styles.campo}>
                  {child.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// Transforma "Para Profissionais em Situação de Burnout" em "para-profissionais-em-situacao-de-burnout"
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')                 // Remove acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove marcas diacríticas
    .replace(/\s+/g, '-')            // Espaços viram hífens
    .replace(/[^\w-]+/g, '')         // Remove caracteres não alfanuméricos
    .replace(/--+/g, '-')            // Remove múltiplos hífens
    .replace(/^-+|-+$/g, '');        // Remove hífens no início/fim
}

const styles = {
  section: {
    marginBottom: '2rem',
  },
  tituloTipo: {
    fontSize: '1.5rem',
    color: '#2a2a2a',
    borderBottom: '2px solid #ccc',
    paddingBottom: '0.25rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  tituloModelo: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#222',
  },
  topic: {
    marginBottom: '0.75rem',
  },
  topicHeader: {
    cursor: 'pointer',
    backgroundColor: '#eee',
    padding: '0.5rem',
    borderRadius: '4px',
  },
  listaCampos: {
    listStyleType: 'disc',
    marginTop: '0.5rem',
    marginLeft: '1.25rem',
  },
  campo: {
    marginBottom: '0.25rem',
  },
};
