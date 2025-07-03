---
sidebar_position: 3
---

# ChatGPT

**O eConsult já conta com inteligência artificial nativa para agilizar tarefas do dia a dia, como geração de textos e análises automáticas. Mas, se preferir, você também pode configurar sua própria conta do ChatGPT e personalizar ainda mais a experiência.**

A integração é simples e acessível (não requer conhecimentos avançados de informática), permitindo que você aproveite todos os recursos do ChatGPT diretamente na plataforma eConsult. Com isso, é possível gerar anotações, resumos, análises e automatizar partes do seu trabalho com o suporte da IA de forma prática, inteligente e adaptada ao seu perfil.

Mesmo com a IA já ativa por padrão no eConsult, essa configuração com a sua própria chave de API do ChatGPT permite:

- Maior controle sobre os dados utilizados
- Personalização da capacidade de uso  
- Escalabilidade conforme suas necessidades

## Funcionalidades com suporte de IA

A IA é utilizada nos seguintes fluxos ou funcionalidades do eConsult:

- **Anotação de Atendimento**: ao incluir ou editar uma anotação, aparece o botão ![Botão ChatGPT](../../../../static/img/prints/buttons/btn_chatgpt.png), que abre um editor que permite sugestões automáticas baseadas em IA.

- **Painel de Resultados – Indicadores**: botão ![Botão Fazer Análise](../../../../static/img/prints/buttons/btn_fazer-analise.png) permite gerar análise com insights com base nos indicadores de um determinado mês.

- **Painel de Resultados – Análise Anual**: permite gerar análise com insights com base nos indicadores de um determinado ano.

Essas funcionalidades já funcionam com a IA do eConsult. A seguir, você aprenderá como conectar sua própria conta do ChatGPT caso queira personalizar essa experiência.

---

## Política de Uso de Tokens no eConsult

### Limite Mensal de Tokens no eConsult

Cada usuário do **eConsult** tem acesso a **192.000 tokens por mês** para utilizar os recursos de inteligência artificial integrados à plataforma.

Esse limite é **renovado automaticamente no primeiro dia de cada mês** e corresponde a uma quantidade generosa de uso, suficiente para os atendimentos e tarefas do dia a dia.

:::warning **Importante:**  
- Esse limite existe apenas como medida de proteção contra abusos e uso excessivo fora do propósito da ferramenta. Ele garante que todos os usuários tenham uma experiência estável, rápida e segura no uso da IA.

- Se você atingir o limite mensal, a IA será temporariamente desativada até o início do próximo mês, quando o saldo de tokens será renovado automaticamente.
:::

Você pode acompanhar o uso dos seus tokens no painel "Configurações" na opção "ChatGPT".

![Uso de tokens](../../../../static/img/prints/chatgpt/chatgpt-008.png)

## Qual modelo de IA o eConsult utiliza?

O **eConsult utiliza exclusivamente o modelo GPT-4o-mini** da OpenAI para todas as funcionalidades nativas de geração de texto.

:::warning **Vantagens do GPT-4o-mini:**

- **Alta eficiência com baixo custo de tokens**
- Excelente para tarefas como:
  - Anotações de atendimento
  - Análises clínicas e psicológicas
  - Resumos e relatórios

- **Mais econômico** que modelos como o GPT-4o e GPT-4-turbo, ideal para uso contínuo
:::

## Se você usar a sua própria API da OpenAI?

Se preferir usar a sua **API da OpenAI diretamente**, você será responsável por inserir créditos e gerenciar o uso.

:::note **Exemplo:** 
Com apenas **$1 por mês**, usando o modelo GPT-4o-mini, você consegue gerar aproximadamente:
- 8 anotações de atendimento por dia (~300 tokens cada)
- 1 análise mensal (~900 tokens)
- 1 análise anual (~900 tokens)  
- **Total:** cerca de 60.000 tokens/mês — **bem abaixo do limite mensal disponível** no eConsult mas suficiente para um uso moderado.
:::

## Resumo

| Recurso                     | Uso via eConsult (nativo)        | Uso via API/ChatGPT pessoal      |
|-----------------------------|----------------------------------|----------------------------------|
| **Modelo usado**            | GPT-4o-mini                      | GPT-4o-mini                      |
| **Tokens disponíveis**      | 192.000 por mês (fixo)           | Depende dos créditos inseridos   |
| **Cobrança**                | Gratuito (incluso no sistema)    | Conforme consumo                 |
| **Bloqueio por excesso**    | Sim, até o próximo mês           | Você define o limite por crédito |

---

Se tiver dúvidas sobre o consumo de tokens ou desejar monitorar o uso, entre em contato com o suporte técnico do eConsult (atendimento@econsult.app.br).

---

## Configurar a integração do seu ChatGPT no eConsult

**1. Crie ou acesse sua conta na OpenAI**
    
    - Acesse: https://platform.openai.com/​

    - Clique em "Sign Up" para criar uma conta ou "Log In" se já tiver uma no canto superior direito da tela.

        ![Painel Configurações](../../../../static/img/prints/chatgpt/chatgpt-002.png)

**2. Vá até a seção de API Keys**
    
    - Após fazer login, vá para: https://platform.openai.com/account/api-keys​

**3. Gere uma nova chave**
    
    - Clique no botão “+ Create new secret key”.
    
        ![Painel Configurações](../../../../static/img/prints/chatgpt/chatgpt-003.png)
    
    - Dê um nome para identificar sua chave (ex: “Minha Chave para eConsult”).
    
        ![Painel Configurações](../../../../static/img/prints/chatgpt/chatgpt-004.png)
    
    - Clique em "Create secret key" ![Painel Configurações](../../../../static/img/prints/chatgpt/chatgpt-005.png).

**4. Copie a chave**

    - Copie a chave exibida logo após criá-la ![Painel Configurações](../../../../static/img/prints/chatgpt/chatgpt-006.png).
    
        :::warning Você não poderá vê-la novamente depois de sair da página.
            - Guarde em local seguro, como um gerenciador de senhas ou arquivo de configuração local.
        :::

**5. Configure a Integração no eConsult**

    - No eConsult, no painel Configurações, acesse a opção "Integrações / ChatGPT".
    
    - Preencha o campo Chave API com a chave copiada anteriormente.
    
        ![Painel Configurações](../../../../static/img/prints/chatgpt/chatgpt-007.png)
    
    - Acione o botão Salvar ![Painel Configurações](../../../../static/img/prints/buttons/btn_salvar.png).
    
**Pronto! Sua integração está feita.**

---

Para que esta integração funcione, é necessário adicionar créditos ao projeto criado na plataforma OpenAI.

:::note

Acreditamos que **$1 por mês** é mais do que suficiente para:
- 8 anotações de atendimento por dia
- 1 análise mensal
- 1 análise anual

:::

## Inserir créditos na plataforma OpenAI

**1. Acesse a Plataforma da OpenAI**

- Acesse: [https://platform.openai.com](https://platform.openai.com)
- Faça login com sua conta OpenAI (a mesma do ChatGPT, se já tiver).

**2. Vá até a Seção de Faturamento**

- No canto superior direito, clique no seu **nome ou ícone de usuário**.
- No menu, selecione **Billing** (Faturamento).

**3. Adicione um Método de Pagamento**

- Acesse a aba **Payment methods**.
- Clique em **“+ Add payment method”**.
- Insira os dados do seu **cartão de crédito** (Visa, MasterCard, etc.).

**4. Configure Limites de Gasto**

- Vá para a aba **Usage limits**.
- Defina um **limite de uso mensal** (recomendado: $5 a $10 para uso moderado).
- Essa configuração ajuda a **evitar cobranças inesperadas**.

:::tip

Você pode acompanhar seu uso e gastos na aba **“Usage”** da plataforma, e ajustar limites sempre que necessário.

:::
