---
sidebar_position: 0
---

# Sobre Faturas do Cliente

O painel Faturas do Cliente é uma ferramenta para a gestão financeira e o controle das transações realizadas com determinado cliente ou grupo de atendimento indicado. Neste painel, você encontrará um conjunto completo de funcionalidades que ajudam a organizar, visualizar e gerenciar todas as faturas associadas a atendimentos de um cliente ou grupo de atendimento específico.

O painel, para exibição das faturas, exige a seleção de um cliente ou grupo de atendimento.

![Painel Faturas do Cliente](../../../static/img/prints/faturascliente/001.png)

Uma vez indicado o cliente ou grupo de atendimento, o sistema mostra:

![Painel Faturas do Cliente](../../../static/img/prints/faturascliente/002.png)

Cada *card* de fatura é composta basicamente pelos seguintes elementos:

- **Valor de Vencimento:** O montante a ser cobrado pelo atendimento prestado. Este valor é registrado na fatura e serve como base para o controle financeiro.

- **Data de Vencimento:** A data limite para o pagamento da fatura. Ajuda a determinar o prazo em que o pagamento deve ser efetuado.

- **Valor de Pagamento:** O valor pago até o momento, podendo ser parcial ou total.

- **Data de Pagamento:** A data em que o pagamento foi efetivamente realizado em sua totalidade. Esta informação é registrada na fatura assim que o pagamento em sua totalidade é confirmado.

Com esses dados, o sistema permite verificar o status das faturas, indicando se estão:

- **Pendentes:** Faturas que ainda não foram pagas em sua totalidade e estão aguardando o pagamento total da fatura.

- **Recebidas:** Faturas cujo pagamento em sua totalidade foi efetuado e registrado, indicando que a transação financeira foi concluída.

Essa organização facilita o acompanhamento das transações financeiras, ajudando a manter o controle sobre pagamentos pendentes e recebidos, e garantindo uma gestão eficiente das finanças associadas aos atendimentos.

Sendo assim, no painel Faturas do Cliente, você encontrará duas sub-abas distintas para um gerenciamento mais detalhado:

![Painel Faturas do Cliente](../../../static/img/prints/faturascliente/003.png)

- **Sub-aba "Pendentes":** Nesta seção, são listadas todas as faturas do cliente especificado que ainda não foram pagas em suas totalidades. A sub-aba fornece uma visão clara das faturas com valores e datas de vencimento, permitindo o acompanhamento das pendências e a gestão eficaz dos pagamentos que estão por vencer ou que estão inadimplentes.

    ![Painel Faturas do Cliente](../../../static/img/prints/faturascliente/004.png)

- **Sub-aba "Recebidas":** Aqui estão registradas todas as faturas que já foram pagas. Esta seção exibe as faturas cujo pagamento foi registrado, incluindo a data de pagamento e o valor pago, facilitando a verificação das transações concluídas e o controle financeiro.

    ![Painel Faturas do Cliente](../../../static/img/prints/faturascliente/005.png)

Na sub-aba Pendentes, você tem duas funções importantes para gerenciar faturas pendentes:

- **Função "Notificar":** Permite notificar o cliente diretamente pelo WhatsApp e/ou E-mail (este último se houver integração SMTP) sobre os pagamentos pendentes que estão marcados (selecionadas). Ao acionar essa função, uma mensagem personalizada pode ser enviada, alertando o cliente sobre a necessidade de quitação das faturas em aberto que estão marcadas (selecionadas). Essa comunicação direta ajuda a lembrar o cliente de forma rápida e eficaz.

    ![Painel Faturas do Cliente](../../../static/img/prints/faturascliente/006.png)

- **Função "Quitar":** Para efetuar pagamentos em sua totalidade, você pode utilizar a função "Quitar". Ao acionar a opção Quitar, o sistema abre tela mostrando informações e exigindo seleção de forma de pagamento. Uma vez definida a forma de pagamento as faturas serão movidas da lista de pendentes para a sub-aba Recebidas, atualizando o status do pagamento e mantendo o controle financeiro em dia.

    ![Painel Faturas do Cliente](../../../static/img/prints/faturascliente/007.png)

    :::note
    Se o sistema não listar nenhuma forma de pagamento, significa que você não tem formas de pagamento cadastradas. Utilize a tela [Cadastro de Formas de Pagamento](/docs/funcionalidades/configuracoes/financas/formas-pagmento) para isso.
    :::

Na sub-aba Recebidas, você também dispõe de duas funções importantes para gerenciar as faturas já quitadas:

- **Notificar:** Permite informar ao cliente, através do WhatsApp, que o pagamento das faturas marcadas (selecionadas) foram recebidas e registradas. Isso mantém o cliente atualizado e garante uma comunicação eficiente.

- **Recibo:** Com essa função, você pode gerar e fornecer um recibo seu oficial para o cliente, contendo as faturas marcadas (selecionadas), documentando o pagamento efetuado de maneira clara e profissional.

Essas funções ajudam a manter o registro financeiro organizado e a garantir uma comunicação transparente com o cliente.

:::tip
Utilize a opção ![Painel Faturas do Cliente](../../../static/img/prints/buttons/btn_card-edit.png) localizada nos *cards* de faturas, tanto "Pendentes" quanto "Recebidas", para realizar alterações. Com essa opção, você pode:

- Efetuar pagamentos totais ou parciais.
- Incluir a fatura na lista de perdas (baixas contábeis), se constatado que esta fatura presumidamente não será recebida.
- Excluir pagamentos já feitos, caso necessário.

Essa funcionalidade permite um gerenciamento flexível e detalhado das faturas, facilitando ajustes e correções no processo de pagamento.
:::
