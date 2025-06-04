---
sidebar_position: 2
---

# Google Drive

**Configure a integração do eConsult com o seu Google Drive para criar um sistema de armazenamento e gerenciamento de arquivos totalmente centralizado e eficiente. Essa integração permite que todos os seus documentos, relatórios, imagens e outros tipos de arquivos sejam facilmente armazenados, acessados e compartilhados diretamente através da plataforma eConsult.**

Além de simplificar o acesso, essa integração também facilita a organização, permitindo que você categorize e armazene seus arquivos de forma estruturada e lógica, de acordo com suas necessidades. Com tudo centralizado no seu Google Drive, você garante que todos os seus arquivos estejam protegidos e sincronizados em tempo real, com backups automáticos, prevenindo a perda de informações.

A página Google Drive pode ser acessada através do [Painel Configurações](/docs/category/painel-configurações). 

Uma vez aciona a opção será mostrada a seguinte tela:

    ![Painel Configurações](../../../../static/img/prints/02_googledrive-001.png)

:::note Por que configurar meu Google Drive no eConsult? 

Essa configuração permitirá que o eConsult se conecte ao seu Google Drive, facilitando o armazenamento, a gestão e o compartilhamento de arquivos diretamente pela plataforma. Uma vez feita a configuração o sistema passa a mostrar:

- **Opção Arquivos no menu Principal:** Permite a gestão de arquivos dos clientes.
- **Aba Arquivos no cadastro do Cliente:** Permite a gestão de arquivos do cliente.
- **Mostra o botão Anexar Arquivos ![Painel Configurações](../../../../static/img/prints/buttons/btn_files.png) nos cards de Atentimento:** Permite fazer uma gestão de arquivos por atendimento.

:::

## Integrar eConsult com o seu Google Drive

:::warning

    Faça esta configuração em um notebook ou desktop, assim você terá mais facilidade de visualização e interação.

:::

1. Crie um Projeto no seu Google Cloud Console

    1. Acesse o Google Cloud Console (https://console.cloud.google.com/welcome/new).

    1. Faça o seu login de acesso.

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-001.png)

    1. Clique em "Select a Project" ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-002.png) no canto superior esquerdo da tela e, em seguida, em "New Project" ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-003.png).

    1. Nomeie o projeto com "eConsult" e clique em "Create".

    1. Selecione o projeto criado "eConsult".

1. Habilite a API do Google Drive

    1. Dentro do Google Cloud Console, com o projeto selecionado, vá até o menu lateral e clique em "API & Services" > "Library".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-004.png)

    1. Na barra de pesquisa, digite "Google Drive API" e acione a tecla "Enter".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-005.png)

    1. Clique em "Google Drive API" e depois em "Enable" para ativar a API para o seu projeto.

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-006.png)

1. Crie Credenciais para a API

    1. Após habilitar a API, vá para "Credentials" no menu lateral.

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-007.png)

    1. Clique em "Create Credentials" e selecione "Service account".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-008.png)

    1. Preencha o campo "Service account name" com o nome "eConsult".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-009.png)

    1. Acione o botão "Done".

1. Crie o arquivo com chave privada de acesso a API do Google Drive

    1. Clique no "Service account" criado.

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-010.png)

    1. Acione a opção "Keys", clique no botão "Add key" e depois "Create new key".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-011.png)

    1. Selecione a opção "Json" e clique no botão "Create".

    1. Será feito um download do arquivo contendo sua chave privada para sua pasta de downloads do seu computador.

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-012.png)

1. Configure a Integração no eConsult

    1. No eConsult, no painel **Configurações**, acesse a opção **Google Drive**.

    1. Clique na opção "Escolher Arquivo", selecione o arquivo contendo sua chave privada na sua pasta de downloads e clique na opção "Abrir".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-013.png)

    1. Clique no botão "Copiar".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-014.png)

    1. Abra o seu Google Drive (https://drive.google.com/drive/home).

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-015.png)

    1. Clique em "New" em seguida "NewFolder".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-016.png)

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-017.png)

    1. Preencha o campo "New Folder" com o nome "eConsult" e clique no botão "Create".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-018.png)

    1. Clique na opção "Share".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-019.png)

    1. No campo "Add people, groups, and calendar events" cole o texto copiado da tela do eConsult e acione a opção "Send".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-020.png)

    1. Clique novamente na opção "Share".

    1. Acesse a opção "Restricted".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-021.png)

    1. Marque a opção "Anyone with the link".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-022.png)

    1. Acione o botão "Copy link" em seguida "Done".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-023.png)

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-024.png)

    1. Na tela do eConsult cole o link copiado no campo "Código de acesso da pasta google drive" e acione o botão "Salvar".

        ![Painel Configurações](../../../../static/img/prints/googledrive/gdrive-025.png)

    Pronto! Sua integração está criada.

    :::note Manutenção e Monitoramento

    - Periodicamente, monitore a integração para garantir que esteja funcionando corretamente e que os tokens de autenticação estejam atualizados.
    - Caso haja problemas de acesso, verifique as credenciais e os escopos configurados.

    :::