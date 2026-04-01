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
    <footer className="footer">
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className="econ-footer">
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <a href="https://econsult.app.br/home" target="_blank">
                    <div className='econ-box-site'>
                      <img src="/img/Logotipo.svg" alt="Logotipo" className='econ-logo-box-col' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <p className='econ-text-box'>Ainda com dúvidas? Nossa equipe pode ajudar:</p>
                  <p className='econ-text-box'>•&nbsp;&nbsp;<a href="https://tawk.to/econsult" target="_blank">Suporte eConsult</a></p>
                  <p className='econ-text-box'>•&nbsp;&nbsp;atendimento@econsult.app.br</p>
                  <p className='econ-text-box'>•&nbsp;&nbsp;+55 (47) 99915-3002 (WhatsApp)</p><br />
                  <p className='econ-title-box'>👉 <a href="https://econsult.app.br/plans" target="_blank">Planos e preços</a></p>
                  <p className='econ-title-box'>👉 <a href="https://econsult.app.br/multidisciplinar" target="_blank">Criar uma conta</a></p>
                </div>
              </div>
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <p className='econ-text-box'><a href="/docs/iniciando/primeiros-passos" target="_blank">•&nbsp;&nbsp;Primeiros passos</a></p>
                  <p className='econ-text-box'><a href="/docs/faq" target="_blank">•&nbsp;&nbsp;FAQ - Perguntas frequentes</a></p><br />
                  <p className='econ-text-box'><a href="/docs/privacidade-condicoes-privacidade/termos-condicoes" target="_blank">Termos e Condições</a></p>
                  <p className='econ-text-box'><a href="/docs/privacidade-condicoes-privacidade/politica-privacidade" target="_blank">Política de privacidade</a></p>
                </div>
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
