import clsx from 'clsx';
import Heading from '@theme/Heading';
import { LuAward, LuUserCheck, LuBadgeHelp, LuUserCog, LuUsers, LuCalendarClock, LuChartColumnStacked, LuLayoutDashboard, LuFileDiff, LuCircleDollarSign, LuReceipt, LuHandHelping, LuHeartCrack, LuHandshake, LuBook } from "react-icons/lu";
import { TbDashboard, TbCashRegister } from "react-icons/tb";
import styles from './styles.module.css';

const FeatureList = [
  {
    link: '/docs/iniciando/nova-conta',
    title: 'Criando uma nova conta',
    icon: <LuAward />,
    description: (
      <>Crie sua conta e aprenda a configurar seu perfil inicial para começar a usar o eConsult com segurança e personalização.</>
    ),
  },
  {
    link: '/docs/iniciando/primeiros-passos',
    title: 'Primeiros passos no eConsult',
    icon: <LuUserCheck />,
    description: (
      <>Aprenda como acessar, navegar, agendar atendimentos e registrar pacientes no seu primeiro contato com o sistema.</>
    ),
  },
  {
    link: '/docs/sobre-econsult/faq',
    title: 'FAQ – perguntas frequentes',
    icon: <LuBadgeHelp />,
    description: (
      <>Consulte respostas rápidas para dúvidas comuns sobre uso, configurações, acessos e funcionamento do eConsult.</>
    ),
  },
  {
    link: '/docs/funcionalidades/conta/visao-conta',
    title: 'Minha conta',
    icon: <LuUserCog />,
    description: (
      <>Saiba como gerenciar dados pessoais, assinatura digital, foto, logotipo da clínica e cadastro de assistentes.</>
    ),
  },
  {
    link: '/docs/funcionalidades/configuracoes/visao-configuracoes',
    title: 'Configurações',
    icon: <LuBadgeHelp />,
    description: (
      <>Ajuste o sistema de acordo com sua rotina: defina preferências, recursos e padrões de funcionamento essenciais.</>
    ),
  },
  {
    link: '/docs/funcionalidades/clientes-grupos/visao-clientes-grupos',
    title: 'Clientes e grupos de atendimento',
    icon: <LuUsers />,
    description: (
      <>Veja como organizar e acessar dados de clientes e grupos para melhorar a gestão e o atendimento no dia a dia.</>
    ),
  },
  {
    link: '/docs/funcionalidades/atendimentos/visao',
    title: 'Agendamentos e atendimentos',
    icon: <LuCalendarClock />,
    description: (
      <>Descubra como criar, remarcar, cancelar atendimentos, registrar dados clínicos e gerenciar pagamentos.</>
    ),
  },
  {
    link: '/docs/funcionalidades/resultados/visao',
    title: 'Resultados, gráficos, indicadores e análises',
    icon: <LuChartColumnStacked />,
    description: (
      <>Visualize indicadores e gráficos por período, tipo de atendimento ou profissional e tome decisões com base em dados.</>
    ),
  },
  {
    link: '/docs/funcionalidades/alertas/visao',
    title: 'Dashboard de alertas',
    icon: <LuLayoutDashboard />,
    description: (
      <>Aprenda a usar o painel de alertas para monitorar pendências, ocorrências e agir com rapidez no sistema.</>
    ),
  },
  {
    link: '/docs/funcionalidades/faturas-cliente/visao',
    title: 'Faturas do cliente',
    icon: <LuFileDiff />,
    description: (
      <>Veja como visualizar, acompanhar e gerenciar faturas de clientes com controle de vencimentos e pagamentos.</>
    ),
  },
  {
    link: '/docs/funcionalidades/receitas-e-despesas/visao',
    title: 'Receitas e despesas',
    icon: <LuCircleDollarSign />,
    description: (
      <>Registre entradas e saídas, acompanhe o caixa, categorize lançamentos e gere relatórios financeiros detalhados.</>
    ),
  },
  {
    link: '/docs/funcionalidades/consolidacao-financeira/visao',
    title: 'Consolidação financeira',
    icon: <LuReceipt />,
    description: (
      <>Entenda como integrar dados financeiros e obter uma visão consolidada das finanças da sua operação.</>
    ),
  },
  {
    link: '/docs/funcionalidades/inadimplencias/visao',
    title: 'Inadimplências',
    icon: <LuHandHelping />,
    description: (
      <>Gerencie atendimentos em atraso com mais eficiência: identifique riscos e planeje ações de cobrança.</>
    ),
  },
  {
    link: '/docs/funcionalidades/perdas-baixas-contabeis/visao',
    title: 'Perdas (baixas contábeis)',
    icon: <LuHeartCrack />,
    description: (
      <>Aprenda a controlar atendimentos inadimplentes classificados como perdas e organize suas baixas contábeis.</>
    ),
  },
  {
    link: '/docs/funcionalidades/perdas-recuperadas/visao',
    title: 'Recuperação de perdas',
    icon: <LuHandshake />,
    description: (
      <>Monitore valores recuperados de atendimentos considerados como perdas e reforce sua gestão financeira.</>
    ),
  },
  {
    link: '/docs/funcionalidades/analise-score/visao',
    title: 'Score do cliente',
    icon: <TbDashboard />,
    description: (
      <>Veja como analisar o comportamento e pontuação dos clientes com base em dados históricos de relacionamento.</>
    ),
  },
  {
    link: '/docs/funcionalidades/campanha-cashback/visao',
    title: 'Campanhas de cashback',
    icon: <TbCashRegister />,
    description: (
      <>Crie campanhas de cashback para engajar clientes, recompensar fidelidade e estimular novos agendamentos.</>
    ),
  },
  {
    link: '/docs/funcionalidades/clientes-grupos/cadastro/aba-prontuario',
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
      <a href={link} className='econ-box' target='_blank'>
        <h3 className='title-links'>{icon} {title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="container text--center">
            <h5>Site oficial eConsult | Documentação</h5>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          <div className="row">
            <div className="econ-footer">
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <a href="https://econsult.app.br" target="_blank">
                    <div className='econ-box-col text--center'>
                      <img src="/img/Logotipo.svg" alt="Logotipo" className='econ-logo-box-col' />
                      <small>Site oficial – econsult.app.br</small>
                    </div>
                  </a>
                </div>
              </div>
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <p className='econ-title-box'>Contato:</p>
                  <p className='econ-text-box'>+55 (47) 99915-3002 (WhatsApp)</p>
                  <p className='econ-title-box'>Suporte:</p>
                  <p className='econ-text-box'>atendimento@econsult.app.br</p>
                </div>
              </div>
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <p className='econ-text-box'><a href="/docs/sobre-econsult/privacidade-condicoes-privacidade/termos-condicoes" target="_blank">Termos e Condições</a></p>
                  <p className='econ-text-box'><a href="/docs/sobre-econsult/privacidade-condicoes-privacidade/politica-privacidade" target="_blank">Política de privacidade</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
      </div>
    </>
  );
}
