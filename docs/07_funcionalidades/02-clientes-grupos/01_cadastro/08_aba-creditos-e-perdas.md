---
sidebar_position: 8
---

# Aba Créditos e Perdas

![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/aba-creditos-perdas.png)

A aba Créditos e Perdas oferece funcionalidades para o gerenciamento de créditos antecipados e perdas financeiras, garantindo um controle financeiro preciso e confiável.

- **Créditos Antecipados:** São valores recebidos de pacientes ou grupos independentemente da prestação dos serviços. Esses créditos podem ser utilizados como forma de pagamento em atendimentos futuros, proporcionando flexibilidade e praticidade para os pacientes. O sistema registra detalhadamente cada transação, assegurando que os créditos sejam devidamente contabilizados e descontados conforme sua utilização, com total transparência e rastreabilidade.

- **Perdas:** Referem-se a valores de atendimentos realizados, mas que não foram recebidos e são considerados irrecuperáveis. O sistema identifica, registra e categoriza essas perdas, permitindo um acompanhamento detalhado e auxiliando na análise financeira e na tomada de decisões estratégicas para reduzir a inadimplência.

## Incluir crédito antecipado

1. Na aba "Créditos e Perdas", acione a opção "Incluir Crédito Antecipado"" ![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/btn_add.png).

1. O sistema abrirá a tela de cadastro "Novo crédito".

    ![Painel Pacientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-024.png)

1. Preencha os campos "Valor", "Data", "Forma de Pagamento" e "Descrição" (opcional).

1. Acione o botão "Incluir" ![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/btn_incluir.png).

1. A aba mostrará um extrato atualizado já com o crédito cadastrado.

    ![Painel Pacientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-025.png)

:::warning
    - Se o campo "Data" for preenchido com a data atual ou uma data anterior, o sistema exibirá automaticamente a indicação "Realizado" ao lado da data. 

        ![Painel Pacientes e Grupos](../../../../static/img/prints/perdas/005.png)
    
    - Caso a data informada seja futura, o sistema mostrará a indicação "Previsto", sinalizando que o pagamento ainda está pendente.

        ![Painel Pacientes e Grupos](../../../../static/img/prints/perdas/006.png)

    - Essa informação (Previsto ou Realizado) também estará visível no *card* correspondente ao crédito.

    Além disso, créditos com o status "Previsto" serão incluídos automaticamente no alerta respectivo do painel "Alertas", indicando que há um pagamento pendente de confirmação.

    ![Painel Pacientes e Grupos](../../../../static/img/prints/perdas/009.png)

    Dessa forma, o painel "Alertas" reúne, em um só lugar, todos os créditos com pagamento previsto, facilitando o acompanhamento e a gestão dessas pendências.
:::

## Mudar status de crédito antecipado de "Previsto" para "Realizado"

No eConsult, créditos com data futura são automaticamente classificados como "Previstos".

Para que sejam considerados "Realizados", é necessário confirmar a efetivação do pagamento. Essa mudança só ocorrerá se a data do pagamento for igual ou anterior à data atual.

1. No *card* do crédito acione a opção ![Painel Pacientes e Grupos](../../../../static/img/prints/perdas/012.png).

1. Preencha no campo "Data" a data que você recebeu efetivamente o valor correspondente ao crédito.

1. Ao indicar a data, o sistema passa a mostrar "Realizado" ao invés de "Previsto".

    ![Painel Pacientes e Grupos](../../../../static/img/prints/perdas/005.png)

1. Acione o botão "Confirmar" ![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/btn_confirmar.png).

1. O sistema passa a mostrar no *card* do crédito a informação "Realizado".

    ![Painel Pacientes e Grupos](../../../../static/img/prints/perdas/007.png)

## Excluir crédito antecipado

1. Na aba "Créditos e Perdas", acione a opção ![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/btn_card-delete.png) no *card* respectivo do crédito que deseja excluir.

1. Confirme a exclusão clicando no botão "Sim".

Você pode selecionar um atendimento ou fatura qualquer e proceder um pagamento utilizando a opção "CRÉDITO ANTECIPADO" no campo "Forma de Pagamento".

## Pagar um atendimento utilizando um "CRÉDITO ANTECIPADO"

1. Em um *card* de fatura pendente na aba "Faturas", acione o botão ![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/btn_card-edit.png).

1. Preencha os campos "Valor" e "Data".

1. No campo "Forma de Pagamento" selecione a opção "CRÉDITO ANTECIPADO".

    ![Painel Pacientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-026.png)

1. O sistema mostrará o saldo do paciente, o valor do pagamento e o saldo restante antes da realização da transação.

    ![Painel Pacientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-027.png)

1. Acione a opção "Receber" para confirmar a transação.

1. Vá para a aba "Créditos Antecipados".

1. Você perceberá que o pagamento constará como "DÉBITO" na listagem, e que o "SALDO" foi atualizado.

    ![Painel Pacientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-028.png)

## Excluir um débito de um Crédito Antecipado

1. Na aba "Créditos e Perdas", no *card* do débito respectivo, acione a opção ![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/btn_card-delete.png).

2. Confirme a exclusão clicando em "Sim".

## Perdas Financeiras

No caso de identificação de uma **perda financeira relacionada a um atendimento**, ou seja, quando se confirma que o paciente não efetuará o pagamento, é necessário realizar a baixa contábil desse valor.

Esse processo consiste em registrar oficialmente a baixa contábil no sistema, removendo o valor da lista de contas a receber e classificando-o como uma perda. Essa ação é fundamental para manter a contabilidade atualizada e refletir de forma precisa a situação financeira da empresa, evitando distorções nos relatórios financeiros.

Para registrar uma determida perda (baixa contábil), você deve selecionar um atendimento ou fatura qualquer e proceder um registro utilizando a opção "PERDA (BAIXA CONTÁBIL)" no campo "Forma de Pagamento". 

## Incluir uma perda (baixa contábil)

1. Em um *card* de fatura pendente na aba "Faturas", acione o botão ![Painel Pacientes e Grupos](../../../../static/img/prints/buttons/btn_card-edit.png).

1. Preencha os campos "Valor" e "Data".

1. No campo "Forma de Pagamento" selecione a opção "PERDA (BAIXA CONTÁBIL)".

    ![Painel Pacientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-029.png)

1. Acione a opção "Receber" para confirmar a transação.

1. Vá para a aba "Créditos e Perdas".

1. Você perceberá que haverá um registro de PERDA na listagem.

    ![Painel Pacientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-030.png)

    :::warning 
    Se o paciente tiver saldo positivo superior ao valor do atendimento o sistema não deixará registrar a perda e avisará que o paciente tem crédito suficiente para o pagamento do atendimento.
    :::

    :::warning 
    O sistema impede o registro de novos atendimentos para paciente ou grupo terapêutico que tem perdas registradas.
    :::