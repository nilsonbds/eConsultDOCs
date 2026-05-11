import clsx from 'clsx';
import { LuUserRound, LuHeartHandshake, LuAward, LuUsersRound, LuMessagesSquare, LuUserCheck, LuBadgeHelp, LuUsers, LuCalendarClock, LuChartColumnStacked, LuLayoutDashboard, LuFileDiff, LuCircleDollarSign, LuReceipt, LuHandHelping, LuHeartCrack, LuHandshake, LuBook, LuBrainCircuit, LuSettings } from "react-icons/lu";
import { TbDashboard, TbCashRegister } from "react-icons/tb";
import styles from './styles.module.css';
import HomepagePortalPaths from '../HomepagePortalPaths';

const featureGroups = [
  {
    eyebrow: 'Contextos de Atendimento no eConsult',
    title: 'Estruture diferentes formas de acompanhamento clínico',
    description:
      'Aprenda como organizar atendimentos individuais, de casal, familiares e grupos terapêuticos no eConsult com continuidade, contexto e integração clínica.',
    items: [
      {
        link: '/docs/primeiros-passos-terapia-individual',
        title: '👤 Atendimento Individual',
        icon: <LuUserRound />,
        description:
          'Entenda como organizar sessões, prontuário, evolução clínica e acompanhamento longitudinal no atendimento individual.',
      },
      {
        link: '/docs/primeiros-passos-terapia-casal',
        title: '💞 Atendimento de Casal',
        icon: <LuHeartHandshake />,
        description:
          'Aprenda a estruturar atendimentos de casal com registros compartilhados, histórico integrado e visão relacional do acompanhamento.',
      },
      {
        link: '/docs/primeiros-passos-terapia-familia',
        title: '👨‍👩‍👧 Atendimento Familiar',
        icon: <LuUsersRound />,
        description:
          'Organize atendimentos familiares com contexto coletivo, histórico integrado e acompanhamento longitudinal dos participantes.',
      },
      {
        link: '/docs/primeiros-passos-terapia-grupo',
        title: '👥 Grupos Terapêuticos',
        icon: <LuMessagesSquare />,
        description:
          'Estruture grupos terapêuticos com prontuário coletivo, acompanhamento dos participantes e continuidade clínica integrada.',
      },
    ],
  },
  {
    eyebrow: 'Diferencial do eConsult',
    title: 'Entenda a evolução clínica com mais clareza',
    description:
      'O eConsult não apenas registra informações — ele ajuda você a interpretar a evolução do paciente ao longo do tempo, com apoio estruturado e inteligência clínica.',
    items: [
      {
        link: '/docs/diferenciais/inteligencia-artificial',
        title: 'Geração assistiva de registros e hipóteses clínicas',
        icon: <LuBrainCircuit />,
        description:
          'A IA apoia na construção de anotações clínicas, sugestões de hipóteses e organização do raciocínio clínico — sempre com validação do profissional.',
      },
      {
        link: '/docs/funcionalidades/acompanhamento-inteligente-do-paciente/visao',
        title: 'Visualização da evolução clínica do paciente',
        icon: <TbDashboard />,
        description:
          'Acompanhe padrões, engajamento e mudanças ao longo do tempo com base no histórico estruturado dos atendimentos.',
      },
      {
        link: '/docs/funcionalidades/resultados/visao',
        title: 'Indicadores e análises da prática clínica',
        icon: <LuChartColumnStacked />,
        description:
          'Visualize dados clínicos e operacionais com gráficos e indicadores que ajudam na tomada de decisão.',
      },
      {
        link: '/docs/funcionalidades/situacoes-atendimento/visao',
        title: 'Alertas e situações críticas da rotina clínica',
        icon: <LuLayoutDashboard />,
        description:
          'Identifique pendências, riscos e eventos importantes que exigem atenção no acompanhamento do paciente.',
      },
    ],
  },
  {
    eyebrow: 'Gestão do consultório',
    title: 'Financeiro, cobranças e controle operacional',
    description:
      'Organize a parte financeira do consultório com visibilidade sobre recebimentos, fluxo de caixa e inadimplência.',
    items: [
      {
        link: '/docs/funcionalidades/faturas-cliente/visao',
        title: 'Controle de faturas dos pacientes',
        icon: <LuFileDiff />,
        description: 'Gerencie vencimentos, pagamentos e cobranças com mais organização.',
      },
      {
        link: '/docs/funcionalidades/receitas-e-despesas/visao',
        title: 'Fluxo de caixa: receitas e despesas',
        icon: <LuCircleDollarSign />,
        description: 'Registre entradas e saídas e acompanhe o fluxo financeiro do seu negócio.',
      },
      {
        link: '/docs/funcionalidades/consolidacao-financeira/visao',
        title: 'Consolidação financeira completa',
        icon: <LuReceipt />,
        description: 'Visualize seus resultados consolidados e facilite a análise estratégica da operação.',
      },
      {
        link: '/docs/funcionalidades/inadimplencias/visao',
        title: 'Gestão de inadimplências',
        icon: <LuHandHelping />,
        description: 'Identifique atendimentos não pagos e acompanhe cobranças com mais eficiência.',
      },
      {
        link: '/docs/funcionalidades/perdas-baixas-contabeis/visao',
        title: 'Controle de perdas e baixas contábeis',
        icon: <LuHeartCrack />,
        description: 'Registre perdas e mantenha o controle contábil atualizado.',
      },
      {
        link: '/docs/funcionalidades/perdas-recuperadas/visao',
        title: 'Recuperação de inadimplências',
        icon: <LuHandshake />,
        description: 'Monitore valores recuperados e acompanhe perdas revertidas.',
      },
      {
        link: '/docs/funcionalidades/campanha-cashback/visao',
        title: 'Campanhas de cashback e fidelização',
        icon: <TbCashRegister />,
        description: 'Implemente campanhas para aumentar recorrência e fidelização dos pacientes.',
      },
    ],
  },
  {
    eyebrow: 'Configuração e suporte',
    title: 'Ajuste o eConsult à sua rotina',
    description:
      'Ajuste o sistema, tire dúvidas frequentes e configure recursos importantes da sua rotina.',
    items: [
      {
        link: '/docs/faq',
        title: 'Perguntas frequentes (FAQ)',
        icon: <LuBadgeHelp />,
        description: 'Encontre respostas rápidas para dúvidas sobre cadastros, acessos, configurações e suporte.',
      },
      {
        link: '/docs/funcionalidades/configuracoes/visao-configuracoes',
        title: 'Ajustes e preferências do sistema',
        icon: <LuSettings />,
        description: 'Configure agenda, pacientes, finanças e integrações de acordo com sua rotina.',
      },
      {
        link: '/docs/funcionalidades/clientes-grupos/cadastro/cadastro#incluir-novo-grupo-de-atendimento',
        title: 'Cadastro de Grupos Terapêuticos',
        icon: <LuUsers />,
        description: 'Cadastre casais, famílias ou grupos terapêuticos com organização integrada.',
      },
    ],
  },
];

function Feature({ link, title, icon, description, index, showStepBadge, col = 'col col--4' }) {
  return (
    <div className={clsx(col, styles.featureCol)}>
      <a href={link} className={styles.featureCard} target="_blank" rel="noopener noreferrer">
        {showStepBadge && index !== undefined && (
          <div className={styles.featureStepBadge}>
            Passo {index + 1}
          </div>
        )}

        <h3 className={styles.featureTitle}>
          <span className={styles.featureIcon}>{icon}</span>
          <span>{title}</span>
        </h3>

        <p className={styles.featureText}>{description}</p>
      </a>
    </div>
  );
}

function FeatureGroup({ eyebrow, title, description, items, showSteps }) {
  return (
    <section className={clsx(styles.featureGroup, showSteps && styles.firstGroup)}>
      <div className="container">
        <div className={styles.groupHeader}>
          <small className={styles.groupEyebrow}>{eyebrow}</small>
          <h2 className={styles.groupTitle}>{title}</h2>
          <p className={styles.groupDescription}>{description}</p>
        </div>

        <div className="row">
          {items.map((item, idx) => (
            <Feature
              col={showSteps ? "col col--6" : "col col--4"}
              key={idx}
              index={showSteps ? idx : undefined}
              showStepBadge={showSteps}
              {...item}
            />
          ))}
        </div>

        {
          showSteps && (
            <HomepagePortalPaths />
          )
        }

      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {featureGroups.map((group, idx) => (
        <FeatureGroup key={idx} showSteps={idx === 0} {...group} />
      ))}
    </>
  );
}