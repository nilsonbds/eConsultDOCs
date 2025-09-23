import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Busca o feed.json do blog
    fetch(`${window.location.origin}/blog/feed.json`)
      .then((res) => res.json())
      .then((data) => setPosts(data.items || []))
      .catch((err) => console.error("Erro ao carregar feed:", err));
  }, []);

  if (!posts.length) return null; // evita mostrar se não tiver posts

  // Função para gerar URL da imagem se não estiver no feed
  const getImageUrl = (post) => {
    if (post.image) return post.image; // caso o feed JSON contenha image
    try {
      const slug = post.id; // id normalmente é o slug
      const res = slug.replaceAll('https://documents.econsult.app.br/blog/', '');
      return `/img/blog/${res}.png`;
    } catch {
      return null;
    }
  };

  return (
    <section className="recent-posts container margin-vert--lg">
      <h2 className="text--center margin-bottom--lg">Últimas do Blog</h2>
      <div className="row">
        {posts.slice(0, 4).map((post) => (
          <div className="col col--3" key={post.id}>
            <div className="card card_blog shadow--md">
              {/* Imagem */}
              {getImageUrl(post) && (
                <div className="card__image">
                  <img
                    src={getImageUrl(post)}
                    alt={post.title}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Corpo do card */}
              <div className="card__body">
                <h5>{post.title}</h5>
                {post.summary && <p>{post.summary.substring(0, 100)}...</p>}
                {post.date_published && (
                  <small>
                    {new Date(post.date_published).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </small>
                )}
              </div>

              {/* Rodapé com botão */}
              <div className="card__footer">
                <a
                  className="button button--primary button--sm"
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ler mais
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
