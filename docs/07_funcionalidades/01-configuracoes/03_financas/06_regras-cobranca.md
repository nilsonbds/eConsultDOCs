---
sidebar_position: 6
---

# Regras de Cobrança

Permite a inclusão de regras que definem como serão aplicados descontos, juros e multas nas transações de pagamentos dos clientes.

Por meio dessas regras, é possível configurar, por exemplo, o percentual de desconto para pagamento antecipado, bem como critérios para incidência de juros e mora em casos de atraso.

Essas configurações são cadastradas previamente e podem ser associadas aos clientes conforme a política comercial da sua organização, garantindo padronização e controle no processo de faturamento.

## Incluir uma nova Regra de Cobrança

1. No painel "Configurações", acione a opção "Regras de Cobrança".

    ![Painel Configurações](../../../../static/img/prints/06_regras-cobranca-001.png)

1. Acione o botão **Incluir Nova Regra de Cobrança** ![Painel Configurações](../../../../static/img/prints/buttons/btn_add.png).

1. O sistema abrirá o formulário de cadastro de nova regra de cobrança.

    ![Painel Configurações](../../../../static/img/prints/06_regras-cobranca-002.png)

1. Preencha o campo "Desconto (%) até o vencimento" com o percentual que será concedido ao paciente que realizar o pagamento até a data de vencimento.

1. Preencha o campo "Número de dias para período de tolerância" com a quantidade de dias, contados a partir da data de vencimento, durante os quais o paciente poderá efetuar o pagamento sem a incidência de juros (mora diária) ou multa.

1. Preencha o campo "Número de dias para período de tolerância" com a quantidade de dias, contados a partir da data de vencimento, durante os quais o paciente poderá efetuar o pagamento sem a incidência de juros (mora diária) ou multa.

1. Preencha o campo "Multa (%) após tolerância" com o percentual de multa que será aplicado sobre o valor devido caso o pagamento seja realizado após o período de tolerância.

1. Preencha o campo "Mora diária (%) após tolerância" com o percentual de juros que será cobrado por dia de atraso, a partir do fim do período de tolerância.

1. Marque a opção "Aplicar a todos os clientes" caso queira que esta regra seja válida para todos os clientes, de forma automática.

1. Marque a opção 'Aplicar a todos os atendimentos' caso deseje que esta regra seja aplicada automaticamente a todos os atendimentos não pagos.

1. Acione o botão "Incluir" ![Painel Configurações](../../../../static/img/prints/buttons/btn_incluir.png).

## Alterar Regra de Cobrança

1. No painel "Configurações", acione a opção "Regras de Cobrança".

1. Acione o botão ![Painel Configurações](../../../../static/img/prints/buttons/btn_card-edit.png) no *card* da regra de cobrança que deseja alterar.

1. O sistema abrirá o formulário de cadastro de alteração de regra de cobrança.

1. Altere o campo "Desconto (%) até o vencimento" com o percentual que será concedido ao paciente que realizar o pagamento até a data de vencimento.

1. Altere o campo "Número de dias para período de tolerância" com a quantidade de dias, contados a partir da data de vencimento, durante os quais o paciente poderá efetuar o pagamento sem a incidência de juros (mora diária) ou multa.

1. Altere o campo "Número de dias para período de tolerância" com a quantidade de dias, contados a partir da data de vencimento, durante os quais o paciente poderá efetuar o pagamento sem a incidência de juros (mora diária) ou multa.

1. Altere o campo "Multa (%) após tolerância" com o percentual de multa que será aplicado sobre o valor devido caso o pagamento seja realizado após o período de tolerância.

1. Altere o campo "Mora diária (%) após tolerância" com o percentual de juros que será cobrado por dia de atraso, a partir do fim do período de tolerância.

1. Marque a opção "Aplicar a todos os clientes" caso queira que esta regra seja válida para todos os clientes, de forma automática.

1. Marque a opção 'Aplicar a todos os atendimentos' caso deseje que esta regra seja aplicada automaticamente a todos os atendimentos não pagos.

1. Acione o botão "Salvar" ![Painel Configurações](../../../../static/img/prints/buttons/btn_salvar.png).

## Excluir Regra de Cobrança

1. No painel "Configurações", acione a opção "Regras de Cobrança".

1. Acione o botão ![Painel Configurações](../../../../static/img/prints/buttons/btn_card-delete.png) no *card* da regra de cobrança que deseja excluir.

1. Confirme a exclusão acionando o botão **Sim**.

:::note Como excluir regras de todos os clientes e/ou atendimentos?

Uma vez que exista pelo menos uma regra cadastrada, o eConsult mostrará as seguintes opções:

- ![Painel Configurações](../../../../static/img/prints/buttons/btn_excluir-regras-em-todos-os-clientes.png): Permite excluir a regra de todos os clientes, ou seja, todos os clientes passarão a não ter uma regra de cobrança.
- ![Painel Configurações](../../../../static/img/prints/buttons/btn_excluir-regras-em-todos-os-atendimentos.png): Permite excluir a regra de todos os atendimentos, ou seja, todos os atendimentos passarão a não ter uma regra de cobrança.