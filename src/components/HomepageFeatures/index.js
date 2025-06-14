import clsx from 'clsx';
import Heading from '@theme/Heading';
import { LuAward, LuUserCheck, LuBadgeHelp, LuUserCog, LuUsersRound, LuCalendarClock, LuChartColumnStacked, LuLayoutDashboard, LuFileDiff, LuCircleDollarSign, LuReceipt, LuHandHelping, LuHeartCrack, LuHandshake, LuBook } from "react-icons/lu";
import { TbDashboardOff, TbCashRegister } from "react-icons/tb";
import styles from './styles.module.css';

const FeatureList = [
  {
    link: '#',
    title: 'Criando uma nova conta',
    icon: <LuAward />,
    description: (
      <>Crie sua conta e aprenda a configurar seu perfil inicial para começar a usar o eConsult com segurança e personalização.</>
    ),
  },
  {
    link: '#',
    title: 'Primeiros passos no eConsult',
    icon: <LuUserCheck />,
    description: (
      <>Aprenda como acessar, navegar, agendar atendimentos e registrar pacientes no seu primeiro contato com o sistema.</>
    ),
  },
  {
    link: '#',
    title: 'FAQ – perguntas frequentes',
    icon: <LuBadgeHelp />,
    description: (
      <>Consulte respostas rápidas para dúvidas comuns sobre uso, configurações, acessos e funcionamento do eConsult.</>
    ),
  },
  {
    link: '#',
    title: 'Minha conta',
    icon: <LuUserCog />,
    description: (
      <>Saiba como gerenciar dados pessoais, assinatura digital, foto, logotipo da clínica e cadastro de assistentes.</>
    ),
  },
  {
    link: '#',
    title: 'Configurações',
    icon: <LuBadgeHelp />,
    description: (
      <>Ajuste o sistema de acordo com sua rotina: defina preferências, recursos e padrões de funcionamento essenciais.</>
    ),
  },
  {
    link: '#',
    title: 'Clientes e grupos de atendimento',
    icon: <LuUsersRound />,
    description: (
      <>Veja como organizar e acessar dados de clientes e grupos para melhorar a gestão e o atendimento no dia a dia.</>
    ),
  },
  {
    link: '#',
    title: 'Agendamentos e atendimentos',
    icon: <LuCalendarClock />,
    description: (
      <>Descubra como criar, remarcar, cancelar atendimentos, registrar dados clínicos e gerenciar pagamentos.</>
    ),
  },
  {
    link: '#',
    title: 'Resultados, gráficos, indicadores e análises',
    icon: <LuChartColumnStacked />,
    description: (
      <>Visualize indicadores e gráficos por período, tipo de atendimento ou profissional e tome decisões com base em dados.</>
    ),
  },
  {
    link: '#',
    title: 'Dashboard de alertas',
    icon: <LuLayoutDashboard />,
    description: (
      <>Aprenda a usar o painel de alertas para monitorar pendências, ocorrências e agir com rapidez no sistema.</>
    ),
  },
  {
    link: '#',
    title: 'Faturas do cliente',
    icon: <LuFileDiff />,
    description: (
      <>Veja como visualizar, acompanhar e gerenciar faturas de clientes com controle de vencimentos e pagamentos.</>
    ),
  },
  {
    link: '#',
    title: 'Receitas e despesas',
    icon: <LuCircleDollarSign />,
    description: (
      <>Registre entradas e saídas, acompanhe o caixa, categorize lançamentos e gere relatórios financeiros detalhados.</>
    ),
  },
  {
    link: '#',
    title: 'Consolidação financeira',
    icon: <LuReceipt />,
    description: (
      <>Entenda como integrar dados financeiros e obter uma visão consolidada das finanças da sua operação.</>
    ),
  },
  {
    link: '#',
    title: 'Inadimplências',
    icon: <LuHandHelping />,
    description: (
      <>Gerencie atendimentos em atraso com mais eficiência: identifique riscos e planeje ações de cobrança.</>
    ),
  },
  {
    link: '#',
    title: 'Perdas (baixas contábeis)',
    icon: <LuHeartCrack />,
    description: (
      <>Aprenda a controlar atendimentos inadimplentes classificados como perdas e organize suas baixas contábeis.</>
    ),
  },
  {
    link: '#',
    title: 'Recuperação de perdas',
    icon: <LuHandshake />,
    description: (
      <>Monitore valores recuperados de atendimentos considerados como perdas e reforce sua gestão financeira.</>
    ),
  },
  {
    link: '#',
    title: 'Score do cliente',
    icon: <TbDashboardOff />,
    description: (
      <>Veja como analisar o comportamento e pontuação dos clientes com base em dados históricos de relacionamento.</>
    ),
  },
  {
    link: '#',
    title: 'Campanhas de cashback',
    icon: <TbCashRegister />,
    description: (
      <>Crie campanhas de cashback para engajar clientes, recompensar fidelidade e estimular novos agendamentos.</>
    ),
  },
  {
    link: '#',
    title: 'Prontuário eletrônico',
    icon: <LuBook />,
    description: (
      <>Aprenda a registrar e acessar informações clínicas de forma estruturada, segura e integrada ao atendimento.</>
    ),
  },
];

function Feature({ link, title, icon, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='econ-box'>
        <h3 className='title-links'>{icon} {title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <div className="container">        
        <p className="hero__atualization text--center"><small>Última atualização: 13/06/2025</small></p>
      </div>
      <section className={styles.features}>
        <div className="container">
          <hr className='separator' />
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
