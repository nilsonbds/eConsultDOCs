---
sidebar_position: 2
---

# Interação e Navegação do *Card* de Atendimentos

A lista de atendimentos no eConsult exibe todos os atendimentos agendados para o dia selecionado, organizados em *cards* individuais. Cada *card* contém informações mínimas sobre o atendimento, incluindo:

- **Hora de início e fim:** Mostra o início e fim do atendimento.
- **Nome do paciente ou grupo:** Nome do paciente ou grupo terapêutico ao qual o atendimento está relacionado.
- **Status de realização ou confirmação:** Apresenta um informe sobre o status atual do atendimento (confirmado, não confirmado, realizado, não realizado ou, se não houver, informe pendente).
- **Valor e valor pago:** Indica o valor do atendimento e quanto já foi pago.

<figure style={{ margin: 0, textAlign: "center", marginBottom: "20px" }}>
  <img src="/img/prints/atendimento/023.png" alt="Painel de Atendimentos" />
  <figcaption style={{ fontStyle: "italic"}}>Card de atendimento</figcaption>
</figure>

Os *cards* mostram alguns ícones informativos como:

|Ícone|Indicação|
|-|-|
|![Atendimentos](../../../static/img/prints/buttons/btn_remoto.png)|Podendo ser exibido abaixo do nome do paciente ou grupo terapêutico, indicando que se trata de um atendimento remoto. Se este icone não for mostrado, significa que o atendimento é presencial.|
|![Atendimentos](../../../static/img/prints/buttons/btn-nao-pago.png)|Podendo ser exibido ao lado do valor do atendimento, indicando que este valor ainda não foi 100% (cem por cento) recebido.|
|![Atendimentos](../../../static/img/prints/buttons/btn-pago.png)|Podendo ser exibido ao lado do valor do atendimento, indicando que este valor foi 100% (cem por cento) recebido.|
|![Atendimentos](../../../static/img/prints/buttons/btn-question.png)|Indica que se trata de um atendimento passado que ainda não tem um informe de "Realizado" ou "Não Realizado". |
|![Atendimentos](../../../static/img/prints/buttons/btn-negativo.png)|Se o atendimento for futuro indica que está com a opção "Não Confirmado". Se o atendimento for passado indica que está com a opção "Não Realizado".|
|![Atendimentos](../../../static/img/prints/buttons/btn-positivo.png)|Se o atendimento for futuro indica que está com a opção "Confirmado". Se o atendimento for passado indica que está com a opção "Realizado".|

Além dos ícones informativos, os *cards* também disponibilizam os seguintes botões de ação:

|Botão|Ação|
|-|-|
|![Atendimentos](../../../static/img/prints/buttons/btn-anotacoes.png)|**Anotações:** Mostra a quantidade de anotações e permite abrir a [tela de gestão de Anotações Clínicas](/docs/funcionalidades/atendimentos/anotacoes).|
|![Atendimentos](../../../static/img/prints/buttons/btn-anexos.png)|**Arquivos:** Mostra a quantidade de arquivos vinculados e permite abrir a [tela de gestão de arquivos do atendimento](/docs/funcionalidades/atendimentos/arquivos).|
|![Atendimentos](../../../static/img/prints/buttons/btn-lembretes.png)|**Marcadores Clínicos:** Mostra as cores dos marcadores clínicos vinculados ao atendimento e permite fazer a gestão destes [marcadores](/docs/funcionalidades/atendimentos/marcadores-clinicos).|
|![Atendimentos](../../../static/img/prints/buttons/btn-presenca.png)|**Informe de Presença (somente para grupos terapêuticos):** Mostra a quantidade de membros vinculados ao grupo terapêutico e permite o [registro de ausências e presenças](/docs/funcionalidades/atendimentos/presenca-pagamentos).​|
|![Atendimentos](../../../static/img/prints/buttons/btn_card-edit.png)|**Alteração:** Permite abrir a tela de alteração de informações do atendimento e, inclusive, recebimentos.|