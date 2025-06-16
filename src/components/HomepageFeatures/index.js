import clsx from 'clsx';
import Heading from '@theme/Heading';
import { LuAward, LuUserCheck, LuBadgeHelp, LuUser, LuUsers, LuCalendarClock, LuChartColumnStacked, LuLayoutDashboard, LuFileDiff, LuCircleDollarSign, LuReceipt, LuHandHelping, LuHeartCrack, LuHandshake, LuBook } from "react-icons/lu";
import { TbDashboard, TbCashRegister } from "react-icons/tb";
import styles from './styles.module.css';

const FeatureList = [
  {
    link: '/docs/iniciando/nova-conta',
    title: 'Abra sua conta e ative o eConsult',
    icon: <LuAward />,
    description: (
      <>Crie sua conta e faça a configuração inicial para começar a utilizar o sistema com segurança e personalização.</>
    ),
  },
  {
    link: '/docs/iniciando/primeiros-passos',
    title: 'Primeiros passos: usando o eConsult',
    icon: <LuUserCheck />,
    description: (
      <>Aprenda rapidamente como acessar, navegar, agendar atendimentos e organizar seus pacientes no eConsult.</>
    ),
  },
  {
    link: '/docs/sobre-econsult/faq',
    title: 'Perguntas frequentes (FAQ)',
    icon: <LuBadgeHelp />,
    description: (
      <>Encontre respostas objetivas para dúvidas comuns sobre cadastros, configurações, acessos e suporte ao sistema.</>
    ),
  },
  {
    link: '/docs/funcionalidades/configuracoes/visao-configuracoes',
    title: 'Ajustes e preferências do sistema',
    icon: <LuBadgeHelp />,
    description: (
      <>Configure o sistema conforme sua rotina: horários, agenda, lembretes, integrações e fluxos de trabalho.</>
    ),
  },
  {
    link: '/docs/funcionalidades/clientes-grupos/visao-clientes-grupos',
    title: 'Cadastro de clientes',
    icon: <LuUser />,
    description: (
      <>Organize o cadastro de pacientes para acesso rápido às informações e acompanhamento eficiente da evolução clínica.</>
    ),
  },
  {
    link: '/docs/funcionalidades/clientes-grupos/cadastro/cadastro#incluir-novo-grupo-de-atendimento',
    title: 'Cadastro de Grupos de Atendimento',
    icon: <LuUsers />,
    description: (
      <>Cadastre e atenda casais, famílias ou grupos terapêuticos, e gerencie as informações de forma integrada e organizada.</>
    ),
  },
  {
    link: '/docs/funcionalidades/atendimentos/visao',
    title: 'Gerenciar atendimentos e agenda',
    icon: <LuCalendarClock />,
    description: (
      <>Agende, reagende, registre evoluções clínicas, acompanhe pagamentos e organize sua agenda com eficiência.</>
    ),
  },
  {
    link: '/docs/funcionalidades/resultados/visao',
    title: 'Relatórios e indicadores de desempenho',
    icon: <LuChartColumnStacked />,
    description: (
      <>Acompanhe gráficos e métricas de produção, receita, atendimentos e performance financeira da clínica.</>
    ),
  },
  {
    link: '/docs/funcionalidades/alertas/visao',
    title: 'Painel de alertas e pendências',
    icon: <LuLayoutDashboard />,
    description: (
      <>Monitore tarefas, ocorrências e avisos importantes para manter o fluxo de trabalho sempre organizado.</>
    ),
  },
  {
    link: '/docs/funcionalidades/faturas-cliente/visao',
    title: 'Controle de faturas dos clientes',
    icon: <LuFileDiff />,
    description: (
      <>Gerencie vencimentos, pagamentos e cobranças de forma prática, com controle detalhado das faturas.</>
    ),
  },
  {
    link: '/docs/funcionalidades/receitas-e-despesas/visao',
    title: 'Fluxo de caixa: receitas e despesas',
    icon: <LuCircleDollarSign />,
    description: (
      <>Registre entradas e saídas financeiras, acompanhe o caixa e obtenha relatórios detalhados do seu financeiro.</>
    ),
  },
  {
    link: '/docs/funcionalidades/consolidacao-financeira/visao',
    title: 'Consolidação financeira completa',
    icon: <LuReceipt />,
    description: (
      <>Visualize seus resultados consolidados com base em todos os lançamentos financeiros da operação.</>
    ),
  },
  {
    link: '/docs/funcionalidades/inadimplencias/visao',
    title: 'Gestão de inadimplências',
    icon: <LuHandHelping />,
    description: (
      <>Acompanhe atendimentos não pagos, identifique inadimplências e facilite o planejamento de cobrança.</>
    ),
  },
  {
    link: '/docs/funcionalidades/perdas-baixas-contabeis/visao',
    title: 'Controle de perdas e baixas contábeis',
    icon: <LuHeartCrack />,
    description: (
      <>Registre inadimplências que viraram perdas e mantenha o controle contábil atualizado.</>
    ),
  },
  {
    link: '/docs/funcionalidades/perdas-recuperadas/visao',
    title: 'Recuperação de inadimplências',
    icon: <LuHandshake />,
    description: (
      <>Acompanhe valores recuperados após baixas e mantenha o controle da sua recuperação financeira.</>
    ),
  },
  {
    link: '/docs/funcionalidades/analise-score/visao',
    title: 'Análise de score dos clientes',
    icon: <TbDashboard />,
    description: (
      <>Visualize o comportamento dos clientes baseado em dados históricos e acompanhe o nível de engajamento.</>
    ),
  },
  {
    link: '/docs/funcionalidades/campanha-cashback/visao',
    title: 'Campanhas de cashback e fidelização',
    icon: <TbCashRegister />,
    description: (
      <>Crie programas de cashback para estimular retorno de pacientes e aumentar a recorrência de atendimentos.</>
    ),
  },
  {
    link: '/docs/funcionalidades/clientes-grupos/cadastro/aba-prontuario',
    title: 'Prontuário eletrônico integrado',
    icon: <LuBook />,
    description: (
      <>Organize registros clínicos estruturados, seguros e integrados aos atendimentos realizados na plataforma.</>
    ),
  }
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
                    <div className='econ-box-site'>
                      <img src="/img/Logotipo.svg" alt="Logotipo" className='econ-logo-box-col' />
                      <small>Site oficial – econsult.app.br</small>
                    </div>
                  </a>
                </div>
              </div>
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <p className='econ-text-box'>Ainda com dúvidas? Nossa equipe pode ajudar:</p>
                  <p className='econ-title-box'>📞 Suporte Personalizado</p>
                  <p className='econ-text-box'>•&nbsp;&nbsp;atendimento@econsult.app.br</p>
                  <p className='econ-text-box'>•&nbsp;&nbsp;+55 (47) 99915-3002 (WhatsApp)</p><br/>
                  <p className='econ-title-box'>👉 <a href="https://econsult.app.br/plans" target="_blank">Planos e preços</a></p>
                  <p className='econ-title-box'>👉 <a href="https://econsult.app.br/userregister" target="_blank">Criar uma conta</a></p>
                </div>
              </div>
              <div className='econ-box-col'>
                <div className='econ-footer-container'>
                  <p className='econ-text-box'><a href="/docs/iniciando/primeiros-passos" target="_blank">•&nbsp;&nbsp;Primeiros passos</a></p>
                  <p className='econ-text-box'><a href="/docs/sobre-econsult/faq" target="_blank">•&nbsp;&nbsp;FAQ - Perguntas frequentes</a></p><br/>
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
