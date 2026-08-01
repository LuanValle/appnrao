# Correspondências

## Confirmado

### Cadastro e consulta

- O administrador da vila ou o administrador geral cadastrará a correspondência.
- O destinatário poderá ser o proprietário ou um dependente.
- A data e a hora do cadastro serão registradas automaticamente.
- Os estados serão `aguardando` e `retirada`.
- O cadastro não terá foto nem classificação por tipo de correspondência.
- Uma correspondência de dependente apontará automaticamente para o proprietário responsável.
- A área autenticada mostrará as correspondências do proprietário e de seus dependentes.
- A consulta pública exibirá somente quantidade e horário, sem dados pessoais.

### Notificação

- Somente o proprietário receberá notificação por WhatsApp.
- Dependentes não receberão WhatsApp diretamente.

### Retirada

- Um administrador marcará a retirada manualmente.
- O nome de quem retirou será registrado como texto.
- A retirada deverá gerar registro de auditoria.
- A retirada em lote somente poderá reunir correspondências da mesma residência.
- A retirada em lote exigirá confirmação.

### Alteração e desfazimento

- A correspondência só poderá ser editada antes da retirada.
- Desfazer uma retirada exigirá justificativa.
- O histórico anterior será preservado ao desfazer a retirada.

## Sugestão

Nenhuma sugestão registrada como decisão.

## Riscos

- Destinatários com nomes semelhantes podem causar associação ou retirada incorreta.
- A retirada em lote pode alterar correspondências indevidas se a residência não for validada.
- A consulta pública pode expor padrões de ausência ou movimentação mesmo sem mostrar nomes.
- Falhas no WhatsApp podem deixar o proprietário sem aviso.
- Alterações sem histórico confiável prejudicam a auditoria.

## Pendências

- Definir a API ou o serviço de WhatsApp.
- Definir o tratamento de falhas, tentativas e confirmação das notificações.
- Definir regras detalhadas da consulta pública.
- Definir limites e validações do texto de quem realizou a retirada.
