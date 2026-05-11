import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { LuBookOpenCheck, LuShieldCheck } from 'react-icons/lu';

export default function HomepageStartHere() {
  return (
    <section className={styles.startHere}>
      <div className="container">
        <div className={styles.startCard}>
          <div className={styles.startIcon}>
            <LuBookOpenCheck />
          </div>

          <div className={styles.startContent}>
            <small className={styles.startLabel}>
              Começando pelo essencial
            </small>

            <h2 className={styles.startTitle}>
              Comece a estruturar sua prática clínica com clareza e visão da evolução dos seus pacientes
            </h2>

            <p className={styles.startText}>
              Siga fluxos simples para organizar sua rotina clínica, registrar atendimentos e iniciar acompanhamentos individuais, de casal, familiares ou grupos terapêuticos com consistência e segurança clínica.
            </p>
          </div>

          <div className={styles.startAction}>
            <Link
              className="button button--primary button--lg"
              to="/docs/iniciando-econsult"
            >
              Ver primeiros passos →
            </Link>

            <small className={styles.startActionNote}>
              Guias rápidos • Leva poucos minutos
            </small>
          </div>
        </div>

        <div className={styles.startTrust}>
          <LuShieldCheck className={styles.startTrustIcon} />
          <span>
            Seus dados são criptografados e protegidos — apenas você tem acesso às informações clínicas.
          </span>
        </div>
      </div>
    </section>
  );
}