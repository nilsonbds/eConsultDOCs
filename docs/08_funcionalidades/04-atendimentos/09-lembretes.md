---
sidebar_position: 9
---

# Marcadores Clínicos

A funcionalidade "Marcadores Clínicos" no sistema eConsult é uma ferramenta estratégica e altamente eficaz para aprimorar a organização, o foco e a qualidade dos atendimentos realizados. Com ela, os profissionais podem configurar até **quetro tipos diferentes de marcadores por atendimento**, cada um representado por uma **cor distinta**, o que proporciona uma visualização rápida e intuitiva das informações essenciais relacionadas a cada caso.

Essa **codificação por cores** permite que os usuários identifiquem com facilidade os marcadores vinculados a um atendimento específico, facilitando a distinção entre diferentes categorias de ações, como follow-ups, pendências administrativas, exames a serem solicitados, entre outros. Dessa forma, as prioridades são evidenciadas com clareza, reduzindo a chance de esquecimentos e contribuindo para uma tomada de decisão mais ágil e assertiva.

Além disso, os marcadores clínicos funcionam como um apoio visual contínuo durante o fluxo de trabalho, permitindo que o profissional mantenha o **foco nas tarefas mais relevantes** e otimize a gestão do tempo.

Em resumo, os "Marcadores Clínicos" representam um recurso valioso dentro do eConsult, que alia praticidade, clareza visual e gestão estratégica para elevar o padrão dos serviços prestados.

## Atribuir marcador clínico ao atendimento

1. Acione a opção ![Atendimento](../../../static/img/prints/atendimento/069.png) no *card* do atendimento que deseja atribuir lembrete.

    ![Atendimento](../../../static/img/prints/atendimento/064.png)

1. O sistema abre a tela "Marcador clínico para o Atendimento".

    ![Atendimento](../../../static/img/prints/atendimento/065.png)

1. Selecione os marcadores desejados (8 no máximo) clicando nas cores disponíveis e, se necessário, adicione uma breve anotação para cada marcador.

    ![Atendimento](../../../static/img/prints/atendimento/066.png)

    :::tip
    Recomenda-se que o texto registre **um breve relato da sessão**, destacando os principais elementos observados clinicamente pelo profissional.

    **Exemplo:**  
    *"**(1)** Paciente relata irritabilidade frequente ao longo da semana, com baixa tolerância a frustrações e conflitos recorrentes no ambiente familiar. **(2)** Observa-se tensão emocional elevada, reatividade aumentada e dificuldade de regulação afetiva."*

    *(1)*: Relato da sessão
    *(2)*: Elementos observados clinicamente
    :::

1. Após fechar a tela de marcadores o sistema atualizará automaticamente o *card* do atendimento, exibindo as cores dos marcadores associados e suas respectivas anotações.

    ![Atendimento](../../../static/img/prints/atendimento/067.png)

    :::tip
        - Para desvincular todos os marcadores de um atendimento, basta acionar a opção "Excluir todos os marcadores" na tela "Marcadores Clínicos".

        - O sistema permite até 8 marcadores por atendimento.
    :::

## Usando Marcadores Clínicos em Anotações Clínicas

Você pode utilizar os marcadores clínicos diretamente nas anotações clínicas. Para isso, siga os passos abaixo:

1. Acione a opção ![Atendimento](../../../static/img/prints/buttons/btn-anotacoes.png) no *card* do atendimento para o qual deseja incluir uma anotação.

1. O sistema abre a tela "Anotações Clínicas".

    ![Atendimento](../../../static/img/prints/atendimento/047.png)

1. Acione o botão "Incluir" ![Atendimento](../../../static/img/prints/buttons/btn_incluir.png).

1. O sistema abre o formulário "Anotações Clínicas".

    ![Atendimento](../../../static/img/prints/atendimento/048.png)

1. Mantenha o campo "Formato da anotação" com a opção "🧠 Gerar anotação estruturada (IA + marcadores)" selecionada.

1. Acione a opção "Gerar sugestão com IA".

    ![Atendimento](../../../static/img/prints/atendimento/098.png)

1. O sistema abrirá a tela de geração de anotação com IA já com a sugestão de anotação.

    ![Atendimento](../../../static/img/prints/atendimento/099.png)

1. Revise e edite a anotação clínica e clique em "Aplicar".

    ![Atendimento](../../../static/img/prints/atendimento/100.png)

1. Marque o campo "Compartilhar com o paciente" se quiser disponibilizar para que o paciente visualize a anotação na Área do Paciente e acione o botão "Salvar anotação clínica".

    ![Atendimento](../../../static/img/prints/atendimento/101.png)

1. O sistema atualizará a tela "Anotações Clínicas" com a nova anotação.

    ![Atendimento](../../../static/img/prints/atendimento/102.png)

1. Ao fechar esta tela, o sistema atualiza o *card* do atendimento, indicando que há uma anotação registrada ![Atendimento](../../../static/img/prints/atendimento/051.png) para o atendimento em questão.

    ![Atendimento](../../../static/img/prints/atendimento/052.png)

Após estas ações, o eConsult gerará automaticamente uma **anotação clínica no formato SOAP**, utilizando os marcadores registrados no atendimento como base para a sugestão.

> ⚠️ **Importante:** A anotação gerada pela IA é um apoio ao registro clínico e deve sempre ser revisada e validada pelo profissional responsável.

---

## 🎞️ Vídeos Curtos

---

#### 🎬 *Marcadores Clínicos e Anotações Clínicas*

<video
  src="https://econsultapp.com/videos/marcadores-clinicos/uso-marcadores-em-anotacoes-clinicas.mp4"
  height="auto"
  controls
  preload="metadata"
  style={{
    maxWidth: '100%',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    margin: '8px 0'
  }}
>
  Seu navegador não suporta vídeo HTML5.
</video>
<p style={{ color: '#666', fontSize: '0.9rem' }}>
  Neste vídeo, você vai descobrir como adicionar marcadores clínicos ao atendimento, aproveitá-los como anotação clínica e, depois, usar a IA para organizar tudo no padrão SOAP, facilitando o registro final no prontuário do paciente.
</p>