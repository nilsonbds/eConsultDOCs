import clsx from 'clsx';
import Heading from '@theme/Heading';
import { LuAward, LuUserCheck, LuBadgeHelp, LuUser, LuUsers, LuCalendarClock, LuChartColumnStacked, LuLayoutDashboard, LuFileDiff, LuCircleDollarSign, LuReceipt, LuHandHelping, LuHeartCrack, LuHandshake, LuBook, LuBrainCircuit, LuSettings } from "react-icons/lu";
import { TbDashboard, TbCashRegister } from "react-icons/tb";
import styles from './styles.module.css';

const FeatureList = [
  {
    link: '/docs/iniciando/nova-conta',
    title: 'Abra sua conta e ative o eConsult',
    icon: <LuAward />,
    description: (
      <>Crie sua conta e realize a configuração inicial para começar a usar o sistema com segurança e personalização, garantindo uma experiência eficiente desde o primeiro uso.</>
    ),
  },
  {
    link: '/docs/iniciando/primeiros-passos',
    title: 'Primeiros passos: usando o eConsult',
    icon: <LuUserCheck />,
    description: (
      <>Aprenda rapidamente a acessar, navegar, agendar atendimentos e organizar seus pacientes no eConsult, tornando sua rotina mais prática e eficiente.</>
    ),
  },
  {
    link: '/docs/sobre-econsult/faq',
    title: 'Perguntas frequentes (FAQ)',
    icon: <LuBadgeHelp />,
    description: (
      <>Encontre respostas objetivas para dúvidas frequentes sobre cadastros, configurações, acessos e suporte, garantindo agilidade na resolução de problemas do sistema.</>
    ),
  },
  {
    link: '/docs/funcionalidades/configuracoes/visao-configuracoes',
    title: 'Ajustes e preferências do sistema',
    icon: <LuSettings />,
    description: (
      <>Configure e personalize o sistema de acordo com suas necessidades, ajustando agenda, clientes, finanças e integrações para uma gestão completa e eficiente.</>
    ),
  },
  {
    link: '/docs/diferenciais/inteligencia-artificial',
    title: 'Inteligência Artificial',
    icon: <LuBrainCircuit />,
    description: (
      <>A IA do eConsult gera anotações inteligentes, insights mensais e anuais, e sugere hipóteses diagnósticas e prognósticas no contexto da especialidade do profissional.</>
    ),
  },
  {
    link: '/docs/funcionalidades/clientes-grupos/cadastro/cadastro#incluir-novo-grupo-de-atendimento',
    title: 'Cadastro de Grupos de Atendimento',
    icon: <LuUsers />,
    description: (
      <>Cadastre e atenda casais, famílias ou grupos terapêuticos, gerenciando informações de forma integrada e organizada para um acompanhamento eficiente e completo.</>
    ),
  },
  {
    link: '/docs/funcionalidades/atendimentos/visao',
    title: 'Gerenciar atendimentos e agenda',
    icon: <LuCalendarClock />,
    description: (
      <>Agende, reagende, registre evoluções, acompanhe pagamentos e organize sua agenda com praticidade e eficiência, garantindo um fluxo de trabalho otimizado.</>
    ),
  },
  {
    link: '/docs/funcionalidades/resultados/visao',
    title: 'Relatórios e indicadores de desempenho',
    icon: <LuChartColumnStacked />,
    description: (
      <>Monitore gráficos e indicadores de produção, faturamento, atendimentos e desempenho financeiro do seu consultório ou organização para uma gestão completa e eficiente.</>
    ),
  },
  {
    link: '/docs/funcionalidades/alertas/visao',
    title: 'Painel de alertas e pendências',
    icon: <LuLayoutDashboard />,
    description: (
      <>Centralize ocorrências e anomalias para permitir ações rápidas e uma gestão proativa, garantindo que a plataforma funcione com máxima eficiência.</>
    ),
  },
  {
    link: '/docs/funcionalidades/faturas-cliente/visao',
    title: 'Controle de faturas dos clientes',
    icon: <LuFileDiff />,
    description: (
      <>Gerencie vencimentos, pagamentos e cobranças de forma prática, mantendo controle detalhado das faturas para garantir eficiência e organização financeira.</>
    ),
  },
  {
    link: '/docs/funcionalidades/receitas-e-despesas/visao',
    title: 'Fluxo de caixa: receitas e despesas',
    icon: <LuCircleDollarSign />,
    description: (
      <>Registre entradas e saídas financeiras, monitore o fluxo de caixa e obtenha relatórios detalhados para uma gestão financeira completa e precisa do seu negócio.</>
    ),
  },
  {
    link: '/docs/funcionalidades/consolidacao-financeira/visao',
    title: 'Consolidação financeira completa',
    icon: <LuReceipt />,
    description: (
      <>Visualize seus resultados consolidados com base em todos os lançamentos financeiros da sua operação, facilitando a análise completa e a tomada de decisões estratégicas.</>
    ),
  },
  {
    link: '/docs/funcionalidades/inadimplencias/visao',
    title: 'Gestão de inadimplências',
    icon: <LuHandHelping />,
    description: (
      <>Monitore atendimentos não pagos, identifique inadimplências rapidamente e facilite o planejamento eficiente das cobranças, garantindo melhor controle financeiro.</>
    ),
  },
  {
    link: '/docs/funcionalidades/perdas-baixas-contabeis/visao',
    title: 'Controle de perdas e baixas contábeis',
    icon: <LuHeartCrack />,
    description: (
      <>Registre inadimplências convertidas em perdas e mantenha o controle contábil sempre atualizado, garantindo uma gestão financeira precisa e transparente.</>
    ),
  },
  {
    link: '/docs/funcionalidades/perdas-recuperadas/visao',
    title: 'Recuperação de inadimplências',
    icon: <LuHandshake />,
    description: (
      <>Monitore os valores recuperados e tenha controle total da recuperação financeira do seu consultório, identificando com agilidade perdas revertidas com eficiência.</>
    ),
  },
  {
    link: '/docs/funcionalidades/analise-score/visao',
    title: 'Análise de score dos clientes',
    icon: <TbDashboard />,
    description: (
      <>Visualize o comportamento dos clientes com base em dados históricos e monitore o nível de engajamento para orientar ações mais assertivas e personalizadas.</>
    ),
  },
  {
    link: '/docs/funcionalidades/campanha-cashback/visao',
    title: 'Campanhas de cashback e fidelização',
    icon: <TbCashRegister />,
    description: (
      <>Implemente programas de cashback para incentivar a fidelização dos clientes e aumentar a recorrência dos atendimentos de forma estratégica e sustentável.</>
    ),
  },
  {
    link: '/docs/funcionalidades/clientes-grupos/cadastro/aba-prontuario',
    title: 'Prontuário eletrônico integrado',
    icon: <LuBook />,
    description: (
      <>Mantenha registros clínicos estruturados, seguros e integrados aos atendimentos, garantindo organização, confiabilidade e continuidade no cuidado ao paciente.</>
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
