---
sidebar_position: 0
---

# Sobre Acompanhamento Inteligente do Paciente

O **Acompanhamento Inteligente do Paciente** reúne, em uma única tela,
informações clínicas, comportamentais e financeiras relacionadas ao
atendimento terapêutico.

Essa funcionalidade permite compreender rapidamente:

-   o estado clínico atual
-   o nível de engajamento no tratamento
-   o risco de interrupção do cuidado
-   a evolução do relacionamento terapêutico ao longo do tempo

![Acompanhamento Inteligente do Paciente](../../../static/img/prints/analisescore/001.png)

------------------------------------------------------------------------

## Seletor de período

O seletor define o intervalo utilizado nas análises comportamentais e
financeiras.

![Acompanhamento Inteligente do Paciente](../../../static/img/prints/analisescore/002.png)

-   Exibe o mês de referência.
-   Permite navegar entre meses.
-   O botão de confirmação aplica o período selecionado.

A análise clínica sempre considera a última sessão realizada com
marcadores, independentemente do mês selecionado.

------------------------------------------------------------------------

## Filtros de pacientes / grupos terapêuticos

Permite localizar pacientes ou grupos terapêuticos por:

-   Classificação comportamental
-   Nome

![Acompanhamento Inteligente do Paciente](../../../static/img/prints/analisescore/003.png)

Os números exibidos indicam a quantidade de pacientes/grupos em cada classificação comportamental.

### Classificações comportamentais

-   **Pacientes em declínio**\
    Redução de frequência ou valor de atendimentos.

-   **Pacientes em crescimento**\
    Aumento de interações e fortalecimento do vínculo terapêutico.

-   **Pacientes estáveis e engajados**\
    Frequência regular e continuidade do cuidado.

-   **Pacientes voláteis**\
    Oscilações de presença ou adesão.

-   **Todos**\
    Exibe a lista completa.

------------------------------------------------------------------------

## *Card* do paciente

Cada paciente é apresentado em um *card* de acompanhamento com leitura
rápida.

![Acompanhamento Inteligente do Paciente](../../../static/img/prints/analisescore/004.png)

O *card* contém três áreas principais:

1.  Estado clínico
2.  Engajamento comportamental
3.  Próximos passos sugeridos

------------------------------------------------------------------------

## Estado clínico

Baseado na última sessão realizada com marcadores clínicos.

Exibe:

-   **Estado Clínico (na data do último marcador clínico)**
-   **Engajamento terapêutico (0--100)**
-   **Risco clínico (0--100)**
-   **Estágio do processo terapêutico**

Quando não há marcadores clínicos, o sistema informa:

> **Avaliação clínica inicial pendente**\
> Registre os primeiros marcadores para iniciar a análise clínica.

------------------------------------------------------------------------

## Engajamento comportamental

Avalia a continuidade do cuidado com base na frequência de atendimentos.

Inclui:

-   **Score de engajamento comportamental (0--100)**
-   **Risco de abandono nos próximos 30 dias**
-   **Frequência típica de atendimento**
-   **Tempo desde a última sessão realizada**
-   **Síntese do relacionamento**
    -   Cliente estável e engajado
    -   Evolução clínica positiva
    -   Risco de abandono elevado
    -   Necessidade de reavaliação do cuidado

### Métricas complementares do engajamento comportamental

Também são exibidos três *subcards* de recortes de tempo. 

- **GLOBAL**: Considera todo o histórico do paciente desde o início do relacionamento com a sua organização.
- **ANO**: Refere-se aos dados acumulados no ano corrente.
- **MÊS**: Apresenta as informações referentes ao comportamento mais recente, no mês atual.

Cada um destes *subcards* exibe um conjunto de indicadores que refletem o desempenho do paciente no período correspondente, sendo:

1. **Classificação por Estrelas e Descrições**: representação de estrelas, legenda e informação, variando de 1 a 5, conforme o desempenho do paciente:

    ★★★★★ – **Excelente** – **Muito acima da média**: O paciente, no período, demonstrou que está muito acima da média em valor gerado, frequência e engajamento. Costuma ser altamente fiel, constante e valioso para o negócio. Ideal para programas de fidelização e reconhecimento.

    ★★★★ – **Bom** – **Acima da média**: No período demostrou ter um bom histórico de interações e contribuições financeiras, com potencial para se tornar um paciente excelente. Merece atenção para fortalecimento do relacionamento.
    
    ★★★ – **Normal** – **Dentro da média**: Apresentou no período um comportamento regular e estável. Ainda não demonstra sinais claros de crescimento ou risco. Estratégias de engajamento e acompanhamento podem melhorar seu desempenho.
    
    ★★ – **Alerta** – **Abaixo da média**: Pode estar diminuindo, no período, o número de interações ou o valor gerado. Requer análise e ações de reengajamento para evitar perda de relacionamento.
    
    ★ – **Crítico** – **Muito abaixo da média**: Pouca ou nenhuma interação no período e baixo valor agregado. Pode estar em risco de perda ou abandono. Recomenda-se ação imediata de recuperação.
    
    **Nenhuma estrela – Sem dados**: Não há dados suficientes do período para gerar um score confiável. Isso ocorre normalmente com pacientes recém-cadastrados ou com histórico incompleto. É necessário aguardar o acúmulo de informações.


2. **Frequência**: Quantas vezes o paciente/grupo teve atendimento realizado no período.

------------------------------------------------------------------------

## Precisão das análises

Se existirem atendimentos passados não marcados como realizados, um
aviso será exibido indicando possível redução de precisão nas análises.

------------------------------------------------------------------------

## Próximos passos sugeridos

O sistema apresenta ações recomendadas conforme a situação do paciente como por exemplo:

-   Registrar primeiros marcadores clínicos
-   Marcar atendimentos passados como **Realizado**
-   Reavaliar pacientes sem sessão recente
-   Priorizar contato em caso de risco de abandono

------------------------------------------------------------------------

## Resultados Integrados do Paciente

Ao clicar sobre o botão ![Acompanhamento Inteligente do Paciente](../../../static/img/prints/analisescore/007.png), o sistema abre a tela "Resultados Integrados do Paciente", cujo conteúdo é similar ao apresentado na tela de *Cadastro de paciente / Aba Resultados*.

Esta tela está organizado em três sub-abas:

-   **Panorama**
-   **Resumos**
-   **Evolução**

![Painel Pacientes e Grupos](../../../static/img/prints/buttons/aba-resultado.png)

Cada uma oferece um nível diferente de leitura do acompanhamento.

---

### Sub-aba Panorama

A sub-aba **Panorama** apresenta uma visão gráfica longitudinal dos principais indicadores administrativos do paciente.

Ela permite identificar rapidamente:

- tendências de frequência  
- comportamento financeiro  
- padrão de comparecimento  
- utilização da agenda  

Os gráficos consideram uma janela temporal móvel (ex.: meses anteriores, mês atual e projeção), facilitando o monitoramento contínuo.

---

#### Indicadores disponíveis

##### **LTV e CLC**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-039.png)

Apresenta a relação entre:

- **LTV (Lifetime Value):** valor gerado pelo paciente  
- **CLC (Customer Lifetime Cost):** custo associado à manutenção do paciente  

Essa leitura ajuda a compreender a sustentabilidade financeira do acompanhamento.

---

##### **Detalhe da frequência**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-040.png)

Mostra o comportamento de comparecimento do paciente, incluindo:

- não confirmados  
- confirmados  
- realizados  
- não realizados  

Permite identificar padrões de adesão ao tratamento.

---

##### **Inadimplência**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-041.png)

Exibe os valores em atraso:

- total no mês  
- acumulado no ano  
- acumulado geral  

Funciona como um sinalizador de risco financeiro do vínculo.

---

##### **Perdas (baixas contábeis)**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-042.png)

Representa valores reconhecidos como perda definitiva no período.

---

##### **Perdas recuperadas**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-043.png)

Indica valores previamente inadimplentes que foram posteriormente recuperados.

---

##### **Ocupação**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-044.png)

Mostra como o paciente utiliza a agenda, discriminando:

- remotos pagos  
- remotos gratuitos  
- presenciais pagos  
- presenciais gratuitos  
- capacidade total  

Ajuda a avaliar eficiência de uso da agenda.

---

##### **Valor dos atendimentos**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-045.png)

Apresenta os valores praticados nos atendimentos do paciente, incluindo métricas como valor médio e máximo no período.

---

##### **Desmarcações e remarcações**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-046.png)

Aponta movimentações de agenda, como:

- desmarcações  
- desmarcações recuperadas  
- remarcações no mês  
- remarcações herdadas de mês anterior  
- remarcações para o próximo mês  

Esse indicador ajuda a avaliar estabilidade do comparecimento.

---

:::note Seletor de período
O período analisado pode ser ajustado pelos controles no topo da tela, permitindo ampliar ou reduzir a janela temporal de análise.

Essa flexibilidade facilita a identificação de tendências, oscilações e mudanças de comportamento ao longo do tempo.

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-047.png)
:::

---

### Sub-aba Resumos

A sub-aba **Resumos** apresenta um consolidado administrativo do mês selecionado, organizado em *cards* sintéticos.

Ela responde rapidamente:

- como está o vínculo com o paciente  
- qual o volume financeiro do período  
- qual o nível de ocupação  
- se há sinais de risco administrativo  

---

#### Cards disponíveis

##### **Dados da relação com o paciente/grupo**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-053.png)

Apresenta:

- tempo de relacionamento  
- ticket médio  
- frequência (mês, ano e global)  
- LTV e CLC (mês, ano e global)  

Esse bloco ajuda a entender o histórico e o valor do vínculo.

---

##### **Atendimentos do mês**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-054.png)

Mostra:

- quantidade total de atendimentos  
- valor total do mês  
- valores quitados e não quitados  

---

##### **Inadimplência**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-056.png)

Exibe o montante inadimplente:

- no mês  
- no ano  
- no total  

---

##### **Perdas (baixas contábeis)**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-057.png)

Apresenta valores reconhecidos como perda.

---

##### **Perdas recuperadas**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-058.png)

Mostra valores recuperados de inadimplência.

---

##### **Ocupação**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-059.png)

Detalha o uso da agenda pelo paciente, incluindo:

- atendimentos remotos e presenciais  
- pagos e gratuitos  
- total de atendimentos  
- capacidade da agenda  

---

##### **Custos pagos**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-060.png)

Apresenta a faixa de valores pagos pelo paciente no mês:

- mínimo  
- médio  
- máximo  

---

##### **Detalhe da frequência**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-061.png)

Mostra o status dos atendimentos:

- não confirmados  
- confirmados  
- não realizados  
- realizados  

---

##### **Remarcações e desmarcações**

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-062.png)

Apresenta a movimentação de agenda do paciente no período.

---

#### Leitura estratégica

A visualização consolidada permite ao profissional:

- identificar padrões de adesão  
- monitorar risco financeiro  
- avaliar estabilidade do comparecimento  
- compreender o valor longitudinal do paciente  
- ajustar estratégias de manejo administrativo  

---

### Sub-aba Evolução

A sub-aba **Evolução** apresenta a leitura longitudinal clínica baseada nos **marcadores clínicos** registrados ao longo das sessões.

Seu objetivo é apoiar o raciocínio clínico, tornando visível a progressão do caso ao longo do tempo.

---

#### Indicadores sintéticos do momento clínico

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-074.png)

No topo da tela, o eConsult apresenta:

- **Direção:** tendência recente do caso (ex.: evolução favorável inicial)  
- **Risco atual:** nível estimado de risco clínico  
- **Manejo sugerido:** orientação assistiva baseada nos marcadores  

Esses elementos oferecem uma leitura rápida do estado atual do processo terapêutico.

---

#### Hipótese dinâmica do processo

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-075.png)

A seção apresenta uma **síntese clínica assistida**, construída a partir dos marcadores registrados.

A análise busca:

- integrar sinais clínicos relevantes  
- identificar movimentos do processo terapêutico  
- apontar focos potenciais de manejo  
- apoiar a leitura longitudinal  

> ⚠️ A hipótese é **assistiva** e não substitui a formulação clínica do profissional.

O texto narrativo pode incluir, conforme o caso:

- sinais de estabilização  
- indicadores de aliança terapêutica  
- movimentos de enfrentamento  
- elementos transferenciais/relacionais  
- ganhos de autonomia  
- padrões de engajamento  

A leitura considera a progressão temporal dos marcadores.

---

#### Linha temporal dos atendimentos

![Resultados](../../../static/img/prints/clientegrupo/clientegrupo-076.png)

Na parte inferior, o sistema apresenta a **progressão clínica por sessão**, incluindo:

- data do atendimento  
- marcadores identificados  
- estágio do processo  
- nível de engajamento  
- nível de risco  
- status do acompanhamento  

Essa visualização permite observar:

- mudanças de fase  
- padrões de estabilidade ou oscilação  
- momentos de maior risco  
- consolidação de ganhos terapêuticos  

---

### Finalidade clínica

A aba **Resultados** foi desenvolvida para:

- apoiar a leitura longitudinal do paciente  
- integrar dimensões clínicas e administrativas  
- tornar visível a evolução do acompanhamento  
- qualificar o planejamento do manejo  
- fortalecer a tomada de decisão baseada em dados  

---

> ⚠️ **Importante:** As análises apresentadas são ferramentas de apoio. A interpretação clínica e as decisões terapêicas são sempre de responsabilidade do profissional.

------------------------------------------------------------------------

#### Conclusão

O Acompanhamento Inteligente do Paciente apoia o profissional na
condução do cuidado, permitindo:

-   identificar pacientes que precisam de atenção
-   agir precocemente diante de riscos
-   acompanhar a evolução terapêutica
-   organizar a prática clínica com maior clareza
