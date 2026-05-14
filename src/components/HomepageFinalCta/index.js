import clsx from 'clsx';
import { LuShieldCheck, LuBrainCircuit, LuFileText, LuArrowRight } from 'react-icons/lu';
import styles from './styles.module.css';

const highlights = [
  {
    icon: <LuBrainCircuit />,
    title: 'Prontuário com apoio de IA',
    description:
      'Registre informações clínicas com mais agilidade e apoio contextual ao longo da rotina.',
  },
  {
    icon: <LuFileText />,
    title: 'Acompanhamento longitudinal',
    description:
      'Visualize a evolução do paciente com mais clareza, indo além de registros isolados.',
  },
  {
    icon: <LuShieldCheck />,
    title: 'Segurança e controle profissional',
    description:
      'Seus dados permanecem protegidos, com uso responsável da tecnologia e autonomia clínica.',
  },
];

function HighlightCard({ icon, title, description }) {
  return (
    <div className={clsx('col col--4', styles.highlightCol)}>
      <div className={styles.highlightCard}>
        <div className={styles.highlightIcon}>{icon}</div>
        <h3 className={styles.highlightTitle}>{title}</h3>
        <p className={styles.highlightDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFinalCta(props) {
  return (
    <section className={styles.finalCtaSection}>
      <div className="container">
        <div className={styles.finalCtaBox}>
          <div className={styles.header}>
            <small className={styles.eyebrow}>COMECE AGORA</small>
            <h2 className={styles.title}>
              Comece a organizar e evoluir sua prática clínica com mais clareza
            </h2>
            <p className={styles.description}>
              Organize seus atendimentos, acompanhe a evolução dos pacientes e
              reduza a carga operacional do dia a dia com mais clareza, segurança
              e continuidade clínica.
            </p>
          </div>

          <div className="row">
            {highlights.map((item, idx) => (
              <HighlightCard key={idx} {...item} />
            ))}
          </div>

          <div className={styles.trustBox}>
            <p className={styles.trustText}>
              Seus dados são protegidos e acessíveis apenas por você. A IA atua
              como suporte ao registro e à análise assistiva — a decisão clínica
              continua sempre sob responsabilidade do profissional.
            </p>
          </div>

          <div className={styles.actions}>
            {
              props.cta ? (
                <a href={props.cta} className={styles.primaryButton}>
                  Começar gratuitamente
                  <LuArrowRight />
                </a>
              ) : (
                <a href="https://econsult.app.br/psicologia" className={styles.primaryButton}>
                  Começar gratuitamente
                  <LuArrowRight />
                </a>
              )
            }

            <a href="/docs/iniciando-econsult" className={styles.secondaryButton}>
              Ver como funciona →
            </a>
          </div>

          <p className={styles.microcopy}>
            Comece agora com 30 dias grátis • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}