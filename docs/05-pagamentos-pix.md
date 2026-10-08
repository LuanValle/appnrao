# Pagamentos via Pix

> **Estado atual: SUSPENSO.** O pagamento Pix está vinculado ao futuro módulo de reservas de churrasqueira e não será implementado no protótipo atual.

## Confirmado

- O pagamento via Pix será obrigatório para a reserva de churrasqueira.
- A reserva deverá estar vinculada ao respectivo pagamento.
- O valor do agendamento será de R$ 22,00.
- O Pix será manual, sem integração automática por API nesta versão.
- Após o morador solicitar a reserva, ela ficará com status pendente até a administração confirmar manualmente o pagamento.
- Enquanto estiver pendente, a reserva já bloqueará a churrasqueira para outros moradores.
- Se o pagamento não for confirmado em até 24 horas, a reserva pendente deverá expirar automaticamente.
- O morador deverá ser avisado dentro do sistema e por WhatsApp quando a reserva pendente expirar por falta de confirmação do pagamento.
- A confirmação manual do pagamento será feita pelo administrador.
- Quando o administrador confirmar manualmente o pagamento, a reserva mudará de status pendente para confirmada.
- No pagamento inicial da reserva, o morador não será obrigado a anexar comprovante.
- O morador poderá anexar o comprovante do Pix no pagamento inicial se quiser agilizar a conferência pela administração.
- Quando o morador pedir reembolso, ele deverá preencher um formulário de devolução.
- No formulário de devolução, o morador deverá anexar o comprovante do pagamento feito.
- O pedido de reembolso poderá ser analisado e aprovado pelo administrador da vila ou pelo administrador geral.
- O administrador da vila só poderá atuar em pedidos de reembolso da própria vila.
- Depois que o reembolso for aprovado, a administração terá até 24 horas para fazer a devolução do Pix.
- Se houver pagamento Pix duplicado ou valor diferente de R$ 22,00, o administrador poderá corrigir manualmente o registro.
- Informações de pagamento poderão ser consultadas e alteradas pelo administrador da vila e pelo administrador geral.
- O administrador da vila só poderá consultar e alterar informações de pagamento da própria vila.
- Alterações em pagamentos e reembolsos deverão exigir justificativa obrigatória do administrador.

## Sugestão

- Em uma versão futura, avaliar integração automática por API Pix para reduzir trabalho manual e risco de erro operacional.

## Riscos

- Pagamento duplicado.
- Correção manual de pagamento duplicado ou valor incorreto deve ser auditada para evitar ajuste indevido.
- Consulta e alteração de informações de pagamento devem respeitar a separação de dados por vila.
- Justificativas genéricas ou incompletas podem prejudicar a auditoria financeira.
- Confirmação manual incorreta ou sem conferência adequada.
- Associação de um pagamento à reserva errada.
- Confirmação de pagamento sem auditoria pode dificultar rastreabilidade em caso de contestação.
- Comprovante falso, incompleto ou de pagamento diferente da reserva.
- Sem comprovante anexado no pagamento inicial, a administração dependerá de conferência manual externa.
- A expiração automática precisa liberar corretamente a churrasqueira para novas reservas.
- O aviso de expiração precisa ser rastreável para reduzir dúvida operacional.
- Atraso operacional na análise do reembolso.
- O prazo de 24 horas para devolução aprovada precisa ser acompanhado para evitar descumprimento.
- Aprovação de reembolso deve respeitar a separação de dados por vila.
- Dados bancários e comprovantes anexados exigem controle de acesso e cuidado com LGPD.

## Pendências

- Definir futuramente os campos do formulário de devolução.
