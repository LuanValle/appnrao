# Reservas de churrasqueiras

> **Estado atual: SUSPENSO.** Este módulo e seus fluxos de pagamento permanecem documentados como escopo futuro, mas não fazem parte do MVP nem aparecem no protótipo atual.

## Confirmado

- O proprietário poderá reservar uma churrasqueira.
- Cada proprietário poderá manter somente uma reserva futura ativa por vez.
- A reserva estará vinculada à vila, à residência e ao pagamento.
- O pagamento será obrigatório.
- O Pix da reserva será manual, sem integração automática por API nesta versão.
- Após o morador solicitar a reserva, ela ficará com status pendente até a administração confirmar manualmente o pagamento.
- Enquanto estiver pendente, a reserva já bloqueará a churrasqueira para outros moradores.
- Se o pagamento não for confirmado em até 24 horas, a reserva pendente deverá expirar automaticamente.
- O morador deverá ser avisado dentro do sistema e por WhatsApp quando a reserva pendente expirar por falta de confirmação do pagamento.
- O administrador confirmará manualmente o pagamento.
- Após a confirmação manual do pagamento pelo administrador, a reserva mudará de pendente para confirmada.
- No pagamento inicial da reserva, o comprovante será opcional; o morador poderá anexá-lo para agilizar a conferência pela administração.
- Quando o morador solicitar reembolso, deverá preencher um formulário de devolução e anexar o comprovante do pagamento feito.
- O pedido de reembolso poderá ser analisado e aprovado pelo administrador da vila ou pelo administrador geral.
- O administrador da vila só poderá atuar em pedidos de reembolso da própria vila.
- Depois que o reembolso for aprovado, a administração terá até 24 horas para fazer a devolução do Pix.
- Se houver pagamento Pix duplicado ou valor diferente de R$ 22,00, o administrador poderá corrigir manualmente o registro.
- Informações de pagamento poderão ser consultadas e alteradas pelo administrador da vila e pelo administrador geral.
- O administrador da vila só poderá consultar e alterar informações de pagamento da própria vila.
- Alterações em pagamentos e reembolsos deverão exigir justificativa obrigatória do administrador.
- O módulo de reserva de churrasqueira existirá somente na Vila Buriti.
- A Vila Buriti possui 8 churrasqueiras.
- As churrasqueiras serão identificadas por numeração.
- O horário de funcionamento será das 09:00 às 22:00.
- As churrasqueiras poderão ser reservadas todos os dias.
- O administrador terá um botão para desativar uma churrasqueira.
- Ao ser desativada, a churrasqueira ficará oculta e não poderá ser escolhida em novas reservas.
- Ao desativar uma churrasqueira, suas reservas futuras já confirmadas serão canceladas.
- Toda reserva terá duração fixa de 24 horas.
- A reserva começará às 09:00 do dia escolhido e terminará às 09:00 do dia seguinte.
- Entre 22:00 e 09:00, a churrasqueira continuará vinculada à reserva, mas seu uso será proibido.
- O valor de cada agendamento será de R$ 22,00.
- Não será necessário aceitar um termo de responsabilidade para concluir a reserva.
- Quando a administração cancelar uma reserva paga por desativação da churrasqueira, o valor de R$ 22,00 deverá ser devolvido integralmente ao morador.
- O morador poderá cancelar a própria reserva mesmo depois que ela já estiver paga.
- Quando o morador cancelar uma reserva já paga, ele terá direito à devolução integral dos R$ 22,00.
- O reembolso ao morador só será devido quando o cancelamento for feito com pelo menos 24 horas de antecedência do início da reserva.
- Se o morador cancelar com menos de 24 horas de antecedência do início da reserva, ele perderá o valor pago.
- Não haverá penalidade adicional para o morador em caso de cancelamento com menos de 24 horas de antecedência.

## Sugestão

- Em uma versão futura, avisar o morador por WhatsApp quando sua reserva for cancelada devido à desativação da churrasqueira.

## Riscos

- Reservas simultâneas podem gerar conflito para a mesma churrasqueira e horário.
- Uma permissão incorreta pode disponibilizar o módulo de reservas para moradores da Vila Humaitá.
- Pagamentos duplicados ou não confirmados podem deixar o estado da reserva inconsistente.
- Correções manuais de pagamento precisam ser auditadas para evitar alteração indevida.
- Consulta e alteração de informações de pagamento precisam respeitar a separação lógica entre vilas.
- Justificativas obrigatórias precisam ser armazenadas no histórico/auditoria.
- A expiração automática de reserva pendente deve liberar corretamente a churrasqueira para outros moradores.
- A notificação de expiração não deve expor dados pessoais nem ser enviada para pessoa errada.
- O reembolso integral em caso de cancelamento administrativo exige controle operacional para confirmar que a devolução foi feita.
- O prazo de 24 horas para devolução aprovada precisa ser acompanhado pela administração.
- A aprovação de reembolso precisa respeitar a separação lógica entre vilas.
- O fluxo manual de Pix aumenta o risco de erro humano, comprovante inválido e demora na análise.
- A confirmação manual do pagamento deve ser auditada para evitar alteração sem rastreabilidade.
- O sistema deverá informar claramente que a reserva permanece ativa durante a madrugada, embora o uso seja proibido entre 22:00 e 09:00.

## Pendências

- Definir regras de uso; essa informação ainda está em aberto.
- Definir futuramente os campos do formulário de devolução.
- Definir futuramente o envio de aviso por WhatsApp quando a reserva for cancelada pela administração.

## Próxima pergunta do levantamento

Ao confirmar manualmente um pagamento Pix, o administrador também deverá informar alguma observação ou comprovante interno?
