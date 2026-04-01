import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function truncateText(text, maxLength = 120) {
  if (!text) return "";

  const clean = String(text).replace(/\s+/g, " ").trim();

  if (clean.length <= maxLength) {
    return clean;
  }

  const truncated = clean.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}...`;
}

function getImageUrl(post) {
  if (post.image) return post.image;

  try {
    const slug = (post.id || "")
      .replace("https://documents.econsult.app.br/blog/", "")
      .replace(/^\/+|\/+$/g, "");

    if (!slug) return null;

    return `/img/blog/${slug}.png`;
  } catch {
    return null;
  }
}

function formatDate(dateString) {
  if (!dateString) return "";

  try {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${window.location.origin}/blog/feed.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Falha ao carregar feed do blog");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.items || []);
      })
      .catch((err) => {
        console.error("Erro ao carregar feed:", err);
      });
  }, []);

  if (!posts.length) return null;

  return (
    <section className={styles.recentPosts}>
      <div className="container">
        <div className={styles.header}>
          <small className={styles.eyebrow}>Blog</small>
          <h2 className={styles.title}>Últimos artigos publicados</h2>
          <p className={styles.description}>
            Conteúdos recentes sobre prática clínica, tecnologia e rotina profissional.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.slice(0, 3).map((post) => {
            const imageUrl = getImageUrl(post);
            const postUrl = post.url || post.id;

            return (
              <article className={styles.card} key={post.id}>
                {imageUrl ? (
                  <div className={styles.imageWrap}>
                    <img
                      src={imageUrl}
                      alt={post.title}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={styles.noImage}>
                    Conteúdo do blog eConsult
                  </div>
                )}

                <div className={styles.body}>
                  <h3 className={styles.postTitle}>{post.title}</h3>

                  {post.summary && (
                    <p className={styles.summary}>
                      {truncateText(post.summary, 120)}
                    </p>
                  )}

                  {post.date_published && (
                    <small className={styles.meta}>
                      {formatDate(post.date_published)}
                    </small>
                  )}
                </div>

                <div className={styles.footer}>
                  <Link
                    className={`button button--outline button--primary button--sm ${styles.linkButton}`}
                    to={postUrl}
                  >
                    Ler artigo
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/blog">
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}