---
sidebar_position: 5
---

# Mensagens Padronizadas

O uso de mensagens padronizadas relacionadas a atendimentos é uma estratégia essencial para otimizar a comunicação com clientes e melhorar a eficiência da comunicação com o cliente. Ao adotar mensagens predefinidas, garante-se agilidade nas interações, padronização da linguagem e um atendimento mais organizado e profissional.

## Notificações de Cobrança

O sistema permite, nas telas de faturas abertas, o envio de notificações de cobrança via WhatsApp ou e-mail para informar o cliente sobre atendimentos pendentes de pagamento. Este campo possibilita a personalização do texto padrão dessas mensagens.

## Notificações de Registro de Pagamentos

O sistema permite, nas telas de faturas fechadas, o envio de notificações de registro de quitação via WhatsApp ou e-mail para informar o cliente sobre atendimentos que tiveram sua quitação reconhecida e registrada. Este campo possibilita a personalização do texto padrão dessas mensagens.

## Texto Padrão para Recibos

Ao emitir recibos de quitação de atendimentos, o sistema utiliza um texto padrão, que pode ser personalizado por meio deste campo.

## Criar outros Textos Padrões para Recibos:

Além do texto padrão para recibos, é possível definir outros padrões para recibos. Isso é importante porque você pode precisar de recibos com textos diferenciados, adaptados ao perfil do cliente.

:::note Para definir estes outros padrões para recibos você deve seguir os seguintes passos:
- Acione a opção ![Painel Configurações](../../../../static/img/prints/buttons/btn_outros-padroes-de-recibos.png).
- O sistema abre a tela "Outros Textos Padrões para Recibos".
- Clique no botão ![Painel Configurações](../../../../static/img/prints/buttons/btn_incluir-novo-padrao.png).
- Preencha os campos de "Título" e "Padrão".
- Feche a tela "Outros Textos Padrões para Recibos".
- Clique no botão ![Painel Configurações](../../../../static/img/prints/buttons/btn_check.png) para salvar as alterações.
:::

:::tip Use variáveis de ambiente
O eConsult utiliza tags para variáveis de ambiente. Por exemplo, se você deseja que o sistema insira automaticamente o nome do cliente num texto padrão, basta utilizar a tag ```<NomeCliente>```.

Existem várias variáveis de ambiente, para vê-las e utilizá-las, siga os passos abaixo:

- Digite os caracteres @@ em qualquer lugar de qualquer um dos campos de mensagem.
- O sistema abrirá a tela "Selecione uma Variável de Ambiente".

    ![Painel Configurações](../../../../static/img/prints/03_mensagens-padronizadas-001.png)

- Clique sobre a variável desejada.
- O sistema irá substituir os caracteres @@ pela tag da variável selecionada.

    :::note
    As variáveis de ambiente se dividem em dois grupos:
    - **Sistema:** são aquelas mais globais e fixas, disponibilizadas pelo próprio sistema.
    - **Campos Adicionais:** são aquelas definidas por você no tela Campos Adicionais.
    :::
:::