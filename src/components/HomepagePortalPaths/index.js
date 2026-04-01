import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { LuBookOpen, LuBrain, LuNewspaper } from 'react-icons/lu';

export default function HomepagePortalPaths() {
  return (
    <section className={styles.portalPaths}>
      <div className="container">

        <div className={styles.header}>
          <small className={styles.eyebrow}>
            Continue sua jornada
          </small>

          <h2 className={styles.title}>
            Encontre o conteúdo certo para cada momento da sua prática
          </h2>

          <p className={styles.description}>
            Acesse conteúdos organizados para apoiar sua prática clínica, uso do sistema
            e aprofundamento profissional.
          </p>
        </div>

        <div className={styles.grid}>

          {/* Guia de Uso */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <LuBookOpen />
            </div>

            <h3 className={styles.cardTitle}>
              Guia de Uso
            </h3>

            <p className={styles.cardText}>
              Aprenda a utilizar o eConsult no dia a dia, com orientações práticas
              para organizar sua rotina clínica.
            </p>

            <Link to="/docs" className={styles.link}>
              Acessar guia completo →
            </Link>
          </div>

          {/* Prática Clínica */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <LuBrain />
            </div>

            <h3 className={styles.cardTitle}>
              Prática Clínica
            </h3>

            <p className={styles.cardText}>
              Aprofunde seu raciocínio clínico com conteúdos sobre acompanhamento
              longitudinal e organização da prática.
            </p>

            <Link to="/pratica" className={styles.link}>
              Explorar conteúdos →
            </Link>
          </div>

          {/* Blog */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <LuNewspaper />
            </div>

            <h3 className={styles.cardTitle}>
              Blog
            </h3>

            <p className={styles.cardText}>
              Leia artigos, análises e reflexões sobre prática profissional,
              tecnologia e rotina clínica.
            </p>

            <Link to="/blog" className={styles.link}>
              Ver artigos →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}