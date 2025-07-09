---
sidebar_position: 1
---

# Aba Geral 

![Painel Clientes e Grupos](../../../../static/img/prints/buttons/aba-geral.png)

No cadastro de Clientes e Grupos de Atendimento, na aba "Geral", os campos são organizados para a inserção das informações essenciais. Nesta seção, apenas "Nome" e Sexo são de preenchimento obrigatório. Esses dados são fundamentais para atender às exigências mínimas necessárias para o registro.

Nesta aba, estão disponíveis ainda, as opções 'Inativar' e 'Grupo de Atendimento'. A primeira permite inativar o cadastro, enquanto a segunda serve para indicar se o cadastro se refere a um cliente ou a um grupo de atendimento.

Os demais campos (informações de contato ou o responsável pelo grupo) são opcionais e podem ser preenchidos conforme necessidade. Essa abordagem proporciona maior flexibilidade, permitindo que sejam inseridos apenas os dados considerados relevantes no momento. Assim, o sistema facilita a personalização e otimização do cadastro, adaptando-se aos objetivos específicos de cada caso, sem exigir informações desnecessárias.

![Painel Clientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-008.png)

## Componentes da Aba Geral

- **Seletor Inativar/Ativado ![Painel Clientes e Grupos](../../../../static/img/prints/buttons/btn_inativar.png)/![Painel Clientes e Grupos](../../../../static/img/prints/buttons/btn_inativado.png):** Esta opção permite inativar ou reativar o cadastro do cliente ou grupo.
- **Seletor Grupo de atendimento ![Painel Clientes e Grupos](../../../../static/img/prints/buttons/btn_grupo-de-atendimento.png):** Indica se o cadastro se trata de um Cliente ou se um Grupo de atendimento.
- **Campo Nome Completo:** Permite incluir o nome completo do cliente ou grupo.
- **Seletor Sexo:** Permite indicar se o cliente ou grupo de atendimento é o sexo Masculino ou Feminino (no caso de cliente se trata de sexo biológico, já no caso de grupo serve como tratamento).
- **Campo Data de Nascimento:** Permite indicar a data de nascimento do cliente ou grupo. Dependendo da data que se coloca, se esta estiver dentro de uma faixa dos Grupos de Cliente por - Idade o sistema informa automaticamente o grupo por idade que o cliente ou grupo se encaixará. Deve-se preencher de forma explícita (ex.: 16/02/1971), com barras, caso contrário o sistema recusará a data.
    ![Painel Clientes e Grupos](../../../../static/img/prints/clientegrupo/clientegrupo-009.png)
- **Campo E-mail:** Permite indicar o e-mail de contato do cliente ou grupo de atendimento.
- **Campo Telefone:** Permite indicar o telefone fixo do cliente ou grupo.
- **Campo Celular:** Permite indicar o celular do cliente ou grupo. 
    :::note
        Nos campos Telefone e Celular, ao digitar o código DDI (por exemplo, +55), o sistema identifica automaticamente o país e exibe a respectiva bandeira como ícone. Caso você não saiba o DDI, basta clicar no ícone da bandeira e selecionar o país desejado. Depois disso, é só digitar o número — o sistema fará a formatação conforme o padrão do país escolhido.
    :::
- **Campo CPF:** Permite indicar o CPF do cliente ou CPF do responsável pelo grupo de atendimento (opcional).
- **Valor dos atendimentos no vencimento:** Permite indicar o valor padrão dos atendimentos no vencimento para o cliente ou grupo de atendimento. 
    :::note
        O sistema sugere o valor indicado na configuração **[Padrões para Atendimentos](/docs/funcionalidades/configuracoes/financas/padroes-atendimentos)**.
    :::
- **Dia de vencimento para atendimentos:** Permite indicar o dia de vencimento para pagamentos dos atendimentos deste cliente ou grupo.
    :::note O sistema permite indicar:
        - No mesmo dia dos atendimentos
        - Último dia do mês
        - Dia 1 do mês subsequente
        - Dia 10 do mês subsequente
        - Dia 15 do mês subsequente
        - Dia 20 do mês subsequente
        - Dia 25 do mês subsequente
        
        Exemplo: Se a data do atendimento for 14/05/2025 (14 de maio de 2025), o dia 5 do mês subsequente é **05/06/2025** (5 de junho de 2025 será a data de vencimento para pagamento do atendimento).
    :::
- **Regras de Cobrança:** Permite indicar uma regra de cobrança para o cliente ou grupo. Esta regra pode conceder descontos para pagamento antecipado ou cobrar juros e mora após um período de atraso.
    :::note
        As regras de cobrança podem ser cadastradas na tela Regras de Cobrança do painel de configuração do sistema.
    :::