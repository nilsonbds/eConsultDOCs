import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageStartHere from '../components/HomepageStartHere';
import ImageSlider from '../components/ImageSlider/imageSlider';
import RecentPosts from '../components/RecentPosts/RecentPosts';
import HomepageFinalCta from '../components/HomepageFinalCta';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary econ-hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}<br />
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageFooter() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <div className="container">
          <div className={styles.footerGrid}>

            <div className={styles.footerColumn}>
              <Link className={styles.brandLink} to="https://econsult.app.br/home">
                <img
                  src="/img/Logotipo.svg"
                  alt="eConsult"
                  className={styles.logo}
                />
              </Link>

              <p className={styles.brandText}>
                Sistema para psicólogos com inteligência clínica longitudinal.
              </p>

              <p className={styles.brandText}>
                Organize atendimentos, acompanhe a evolução dos pacientes e reduza a carga operacional com mais clareza e segurança.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <p className={styles.footerTitle}>Suporte</p>

              <p className={styles.footerText}>
                Ainda com dúvidas? Nossa equipe pode ajudar:
              </p>

              <p className={styles.footerText}>
                • <a href="https://tawk.to/econsult" target="_blank" rel="noreferrer">Suporte eConsult</a>
              </p>

              <p className={styles.footerText}>
                • <a href="mailto:atendimento@econsult.app.br">atendimento@econsult.app.br</a>
              </p>

              <p className={styles.footerText}>
                • <a href="https://wa.me/5547999153002" target="_blank" rel="noreferrer">
                  +55 (47) 99915-3002 (WhatsApp)
                </a>
              </p>

              <div className={styles.footerActions}>
                <a
                  href="https://econsult.app.br/plans"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerAction}
                >
                  👉 Planos e preços
                </a>

                <a
                  href="https://econsult.app.br/psicologia"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerAction}
                >
                  👉 Criar uma conta
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <p className={styles.footerTitle}>Conteúdo e informações</p>

              <p className={styles.footerText}>
                <Link to="/docs/iniciando-econsult">Primeiros passos</Link>
              </p>

              <p className={styles.footerText}>
                <Link to="/docs/faq">FAQ - Perguntas frequentes</Link>
              </p>

              <p className={styles.footerText}>
                <Link to="/blog">Blog</Link>
              </p>

              <div className={styles.footerLegal}>
                <p className={styles.footerText}>
                  <Link to="/docs/privacidade-condicoes-privacidade/termos-condicoes">
                    Termos e Condições
                  </Link>
                </p>

                <p className={styles.footerText}>
                  <Link to="/docs/privacidade-condicoes-privacidade/politica-privacidade">
                    Política de privacidade
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </footer>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      
      <main>
        <section className={styles.sliderSection}>
          <div className="container">
            <p className={styles.sliderIntro}>
              Veja como o eConsult organiza sua prática clínica no dia a dia
            </p>
            <ImageSlider />
            <p className={styles.sliderDescription}>
              Agenda, prontuário, indicadores e acompanhamento do paciente — tudo integrado em um único sistema.
            </p>
          </div>
        </section>
        <HomepageStartHere />
        <HomepageFeatures />
        <RecentPosts />
        <HomepageFinalCta />
      </main>

      <HomepageFooter />
    </Layout>
  );
}
