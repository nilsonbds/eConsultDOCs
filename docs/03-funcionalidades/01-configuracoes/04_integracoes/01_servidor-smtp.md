---
sidebar_position: 1
---

# Servidor SMTP

**O servidor SMTP (Simple Mail Transfer Protocol) é responsável pelo envio de e-mails. Ele atua como um intermediário, encaminhando as mensagens do remetente para o servidor de destino.**

O **eConsult** envia e-mails automaticamente aos seus clientes utilizando o SMTP padrão do sistema. No entanto, se preferir, você pode configurar **seu próprio servidor SMTP** para o envio dessas mensagens.

### Por que usar um servidor SMTP personalizado?

- **Garantir maior controle sobre os envios**  
  Ao utilizar seu próprio servidor SMTP, você pode acompanhar de forma mais precisa o status dos e-mails enviados (entregues, rejeitados, abertos, etc.), aplicar regras específicas para os envios e configurar limites de envio conforme suas necessidades.

- **Utilizar domínios de e-mail próprios**  
  Isso permite que os e-mails sejam enviados com um endereço profissional, como `contato@seudominio.com`, em vez do domínio `system@econsult.app.br` do eConsult. Isso aumenta a credibilidade da sua comunicação e fortalece a identidade da sua marca.

- **Melhorar a entregabilidade das mensagens**  
  O eConsult já utiliza servidores com autenticação adequada (SPF, DKIM, DMARC), garantindo alta taxa de entrega e evitando que os e-mails caiam na caixa de spam. No entanto, se você deseja que os e-mails sejam enviados diretamente pelo seu domínio, com total controle e monitoramento técnico, um SMTP próprio pode ser configurado para isso.

- **Seguir políticas internas de segurança ou compliance**  
  O eConsult já segue boas práticas de segurança e proteção de dados em conformidade com regulamentações como a LGPD. Porém, caso você queira que todo o tráfego de e-mail passe exclusivamente pelos seus próprios servidores — por motivos de auditoria, registro ou normas suas —, é possível configurar um SMTP personalizado para atender a essas diretrizes.


### O que você vai precisar

Para configurar seu servidor SMTP no eConsult, normalmente são necessários:

- **Endereço do servidor SMTP** (ex: `smtp.gmail.com`)
- **Porta de conexão** (comum: `465` para SSL ou `587` para TLS)
- **Dados de autenticação** (usuário e senha da conta de e-mail)
- **Tipo de segurança** (SSL ou TLS)

### Como obter essas informações?

Consulte a documentação do seu provedor de e-mail — como:

- [Gmail – SMTP](https://support.google.com/mail/answer/7126229?hl=pt-BR)
- [Outlook / Microsoft 365 – SMTP](https://support.microsoft.com/pt-br/office/configura%C3%A7%C3%B5es-de-servidor-pop-imap-e-smtp-99337f65-3a52-4e8d-8dd6-7c4e3d1a5c62)
- [Yahoo Mail – SMTP](https://help.yahoo.com/kb/SLN4724.html)

### Como configurar no eConsult

Após reunir as informações, acesse o painel "Configurações", opção **"Servidor SMTP"** dentro do eConsult e preencha os campos solicitados. A partir daí, o sistema passará a utilizar seu servidor personalizado para o envio de todos os e-mails.