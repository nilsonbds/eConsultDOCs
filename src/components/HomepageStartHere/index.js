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
              Comece a estruturar sua prática clínica com clareza e visão da evolução dos pacientes
            </h2>

            <p className={styles.startText}>
              Siga um fluxo simples para organizar sua rotina clínica, registrar
              atendimentos e iniciar o acompanhamento dos pacientes com
              consistência e segurança.
            </p>
          </div>

          <div className={styles.startAction}>
            <Link
              className="button button--primary button--lg"
              to="/docs/iniciando/comecando-individual/comecando-econsult-primeiros-passos"
            >
              Ver primeiros passos →
            </Link>

            <small className={styles.startActionNote}>
              Fluxo guiado • Leva poucos minutos
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