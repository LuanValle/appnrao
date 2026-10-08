# Plano de construção do site

Este documento organiza o caminho de construção do portal da Associação das Vilas da Marinha, desde a preparação inicial até a entrega final.

React foi escolhido para o front-end. As demais partes da stack devem ser escolhidas em etapa própria, depois que os requisitos principais estiverem claros o suficiente.

## Estado atual

- O módulo de reservas de churrasqueiras está suspenso temporariamente.
- O valor do agendamento foi definido em R$ 22,00.
- Regras de uso da churrasqueira permanecem em aberto.
- Regras completas de pagamento Pix manual, campos do formulário de devolução, permissões, notificações, login, auditoria e segurança ainda precisam ser fechadas.
- A documentação local deve continuar sendo alimentada antes de cada avanço relevante.
- O protótipo responsivo do front-end em React está em construção por etapas.
- O protótipo atual prioriza site público, área simulada do morador, árvore familiar/cadastral e correspondências.
- A experiência mobile será representada pela interface responsiva; aplicativo nativo ou React Native fica para etapa futura.
- A primeira direção visual da página inicial foi aprovada e está documentada em [Protótipo do front-end](10-prototipo-front-end.md).

## Etapa 1: Fechamento mínimo dos requisitos

Objetivo: ter clareza suficiente para evitar retrabalho grande durante a construção.

Atividades:

- Revisar todos os documentos existentes.
- Fechar regras pendentes críticas de reservas.
- Fechar regras mínimas de Pix.
- Fechar permissões dos perfis.
- Fechar regras básicas de login e recuperação de senha.
- Fechar regras de auditoria.
- Fechar cuidados mínimos de LGPD e segurança.

Entregáveis:

- Documentos de requisitos atualizados.
- Histórico de decisões atualizado.
- Lista clara do que ainda ficará para versão futura.

Critério de pronto:

- Nenhum fluxo principal deve depender de uma regra desconhecida.

## Etapa 2: Definição do escopo da primeira versão

Objetivo: separar o que entra na primeira entrega do que ficará para depois.

Atividades:

- Definir o MVP do portal.
- Separar funcionalidades obrigatórias, desejáveis e futuras.
- Confirmar se a primeira versão terá todas as áreas ou apenas parte delas.
- Definir quais páginas institucionais entram primeiro.

Entregáveis:

- Documento de escopo da versão 1.
- Lista de funcionalidades fora da versão 1.

Critério de pronto:

- A primeira versão deve estar pequena o suficiente para ser construída e testada com segurança.

## Etapa 3: Mapa de telas e fluxos

Objetivo: definir como usuário e administrador vão navegar pelo sistema.

Atividades:

- Mapear telas públicas.
- Mapear telas do morador.
- Mapear telas do administrador da vila.
- Mapear telas do administrador geral.
- Mapear fluxo de correspondências.
- Registrar reservas e pagamento Pix como fluxos futuros suspensos.
- Mapear fluxo de retirada, desfazer retirada e auditoria.

Entregáveis:

- Lista de telas.
- Fluxos principais em texto ou diagrama.
- Regras de acesso por tela.

Critério de pronto:

- Cada perfil deve ter um caminho claro para executar suas tarefas principais.

## Etapa 4: Modelo de dados conceitual

Objetivo: identificar quais informações o sistema precisa guardar.

Atividades:

- Definir entidades principais.
- Relacionar vila, residência, proprietário e dependentes.
- Relacionar correspondência, destinatário, retirada e auditoria.
- Relacionar churrasqueira, reserva, pagamento e status.
- Relacionar PNR, titular, integrantes do núcleo familiar e destinatários de correspondência.
- Definir campos obrigatórios e sensíveis.
- Separar dados por vila.

Entregáveis:

- Modelo conceitual de dados.
- Lista de dados pessoais.
- Lista de dados auditáveis.

Critério de pronto:

- Deve ser possível explicar onde cada informação importante será armazenada e por quê.

## Etapa 5: Escolha da tecnologia

Objetivo: completar a escolha da stack com base nos requisitos e registrar a decisão já tomada para o front-end.

Atividades:

- Avaliar necessidade de painel administrativo.
- Avaliar autenticação, permissões e auditoria.
- Avaliar integração Pix e WhatsApp.
- Avaliar hospedagem disponível.
- Avaliar manutenção futura.
- Confirmar a adequação do React aos requisitos do front-end.
- Escolher backend, banco de dados e hospedagem.

Entregáveis:

- Registro de decisão técnica.
- Justificativa da escolha.
- Riscos técnicos conhecidos.

Critério de pronto:

- A tecnologia escolhida deve suportar os requisitos confirmados e ser viável para manutenção.

## Etapa 6: Preparação do projeto

Objetivo: criar a base técnica organizada para desenvolvimento.

Atividades:

- Criar estrutura inicial do projeto.
- Configurar controle de versão.
- Definir ambientes de desenvolvimento, teste e produção.
- Configurar variáveis sensíveis sem expor credenciais.
- Preparar padrões de organização do código.
- Preparar documentação técnica inicial.

Entregáveis:

- Projeto inicial executando localmente.
- README técnico.
- Estrutura de pastas definida.

Critério de pronto:

- O projeto deve abrir localmente e ter instruções claras para manutenção.

## Etapa 7: Site público institucional

Objetivo: entregar a parte pública do portal.

Atividades:

- Criar página inicial.
- Criar páginas simples de conteúdo institucional.
- Criar área de notícias, avisos ou documentos, conforme escopo.
- Preservar a identidade da referência informada e reutilizar somente os recursos visuais autorizados.
- Garantir responsividade em celular, tablet e desktop.

Entregáveis:

- Site público navegável.
- Conteúdo editável conforme regra definida.

Critério de pronto:

- Visitantes devem conseguir acessar informações públicas sem login e sem exposição de dados pessoais.

## Etapa 8: Autenticação e perfis

Objetivo: permitir acesso seguro às áreas internas.

Atividades:

- Implementar login.
- Implementar cadastro por administrador.
- Implementar perfis e permissões.
- Separar acesso por vila.
- Implementar recuperação de senha, se definida.
- Implementar controles de sessão.

Entregáveis:

- Login funcional.
- Perfis funcionando conforme regra.
- Acesso separado entre Buriti e Humaitá.

Critério de pronto:

- Um administrador de uma vila não deve acessar dados administrativos da outra vila.

## Etapa 9: Módulo de correspondências

Objetivo: controlar cadastro, consulta e retirada de correspondências.

Atividades:

- Implementar cadastro de correspondência.
- Implementar vínculo com proprietário ou dependente.
- Implementar consulta pública sem dados pessoais.
- Implementar área logada do morador.
- Implementar retirada manual.
- Implementar retirada em lote para mesma residência.
- Implementar desfazer retirada com justificativa.
- Implementar auditoria das ações críticas.

Entregáveis:

- Fluxo completo de correspondências.
- Registro de auditoria.

Critério de pronto:

- A retirada e o desfazer retirada devem manter histórico verificável.

## Etapa 10: Árvore familiar e atualização cadastral

Objetivo: permitir que o titular organize os integrantes vinculados ao próprio PNR.

Atividades:

- Exibir o titular do PNR.
- Cadastrar, editar e remover integrantes do núcleo familiar.
- Informar nome, parentesco e situação cadastral.
- Permitir que integrante cadastrado seja destinatário de correspondência.
- Demonstrar o fluxo em desktop e largura de celular.

Critério de pronto:

- O morador consegue cadastrar um filho e reencontrá-lo na árvore após recarregar a página.

## Etapa 11: Módulo de reservas de churrasqueiras — futuro suspenso

Objetivo: permitir que moradores reservem churrasqueiras conforme regras confirmadas.

Atividades:

- Disponibilizar o módulo de reservas somente para a Vila Buriti.
- Cadastrar as 8 churrasqueiras da Vila Buriti.
- Identificar churrasqueiras por numeração.
- Considerar funcionamento todos os dias, das 09:00 às 22:00.
- Aplicar duração fixa de 24 horas por reserva.
- Iniciar a reserva às 09:00 do dia escolhido e encerrá-la às 09:00 do dia seguinte.
- Manter a churrasqueira vinculada à reserva entre 22:00 e 09:00, mas proibir seu uso nesse período.
- Cobrar R$ 22,00 por agendamento.
- Bloquear conflito na mesma churrasqueira e horário.
- Impedir mais de uma reserva futura ativa por proprietário.
- Permitir que admin retire churrasqueira do ar.
- Cancelar reservas futuras confirmadas quando a churrasqueira sair do ar.
- Registrar reembolso integral de R$ 22,00 quando uma reserva paga for cancelada pela administração por desativação da churrasqueira.
- Permitir que o morador cancele a própria reserva mesmo depois do pagamento.
- Registrar reembolso integral de R$ 22,00 quando o morador cancelar uma reserva já paga com pelo menos 24 horas de antecedência do início da reserva.
- Manter o valor pago quando o morador cancelar com menos de 24 horas de antecedência do início da reserva.
- Não aplicar penalidade adicional ao morador em cancelamento com menos de 24 horas.

Entregáveis:

- Calendário de disponibilidade.
- Fluxo de reserva.
- Botão administrativo para desativar a churrasqueira e ocultá-la das novas reservas.
- Cancelamento das reservas futuras confirmadas vinculadas a uma churrasqueira desativada.
- Regra de reembolso integral para cancelamento administrativo de reserva paga.
- Fluxo de cancelamento solicitado pelo morador.
- Regra de reembolso integral para cancelamento solicitado pelo morador.
- Regra de perda do valor pago em cancelamento solicitado pelo morador com menos de 24 horas.
- Regra de ausência de penalidade adicional no cancelamento tardio.

Critério de pronto:

- O sistema não deve permitir duas reservas conflitantes na mesma churrasqueira.

## Etapa 12: Pagamento Pix — futuro suspenso

Objetivo: vincular a reserva ao pagamento obrigatório.

Atividades:

- Definir modelo de Pix.
- Implementar registro manual do pagamento.
- Criar reserva inicialmente com status pendente até confirmação manual do pagamento.
- Bloquear a churrasqueira para outros moradores enquanto a reserva estiver pendente.
- Expirar automaticamente a reserva pendente se o pagamento não for confirmado em até 24 horas.
- Avisar o morador dentro do sistema e por WhatsApp quando a reserva pendente expirar por falta de confirmação do pagamento.
- Permitir anexo opcional de comprovante no pagamento inicial para agilizar conferência.
- Vincular pagamento à reserva.
- Permitir que o administrador confirme manualmente o pagamento.
- Alterar a reserva de pendente para confirmada após confirmação manual pelo administrador.
- Permitir correção manual pelo administrador em caso de Pix duplicado ou valor diferente de R$ 22,00.
- Tratar falha e comprovante inválido.
- Tratar cancelamento, reembolso ou pendência.
- Implementar formulário de devolução para pedido de reembolso.
- Permitir anexo do comprovante do pagamento feito no formulário de devolução.
- Permitir análise e aprovação de reembolso pelo administrador da vila ou administrador geral.
- Restringir o administrador da vila aos reembolsos da própria vila.
- Controlar prazo de até 24 horas para devolução do Pix após aprovação do reembolso.
- Permitir consulta e alteração de informações de pagamento pelo administrador da vila e administrador geral.
- Restringir o administrador da vila às informações de pagamento da própria vila.
- Exigir justificativa obrigatória do administrador em alterações de pagamentos e reembolsos.

Entregáveis:

- Reserva vinculada ao pagamento.
- Estados claros de pagamento.
- Status pendente para reserva aguardando confirmação manual do pagamento.
- Bloqueio de disponibilidade enquanto a reserva estiver pendente.
- Expiração automática da reserva pendente após 24 horas sem confirmação de pagamento.
- Aviso dentro do sistema e por WhatsApp quando a reserva pendente expirar.
- Status confirmado após confirmação manual do pagamento pelo administrador.
- Evidência de confirmação manual.
- Comprovante opcional no pagamento inicial.
- Formulário de devolução com anexo de comprovante.
- Fluxo de análise e aprovação de reembolso por administrador autorizado.
- Prazo operacional de 24 horas para devolução após aprovação do reembolso.
- Correção manual de Pix duplicado ou valor incorreto.
- Permissões de consulta e alteração de pagamento por administrador autorizado.
- Justificativa obrigatória em alterações de pagamentos e reembolsos.

Critério de pronto:

- Uma reserva não deve ficar confirmada sem conferência clara do pagamento.

## Etapa 13: Notificações

Objetivo: informar moradores sobre eventos relevantes.

Atividades:

- Definir eventos que geram notificação.
- Implementar aviso de expiração da reserva pendente dentro do sistema e por WhatsApp.
- Implementar notificação de correspondência ao proprietário.
- Implementar notificação de reserva, se definido.
- Integrar WhatsApp quando a API for escolhida.
- Garantir que dependente não receba WhatsApp direto.

Entregáveis:

- Notificações conforme regras confirmadas.
- Registro de tentativa ou envio, se necessário.

Critério de pronto:

- Notificações não devem expor dados pessoais para pessoa errada.

## Etapa 14: Conteúdo administrativo

Objetivo: permitir que o administrador geral mantenha conteúdo simples do site.

Atividades:

- Implementar cadastro e edição de notícias, avisos ou documentos.
- Definir publicação, rascunho e remoção.
- Definir quem pode publicar.
- Validar anexos permitidos.

Entregáveis:

- Painel simples de conteúdo.
- Conteúdo público atualizado pelo admin geral.

Critério de pronto:

- Apenas o administrador geral deve editar conteúdo institucional, conforme regra atual.

## Etapa 15: Auditoria, logs e segurança

Objetivo: proteger ações críticas e permitir rastreabilidade.

Atividades:

- Implementar auditoria de ações críticas.
- Registrar usuário, ação, data/hora e dados relevantes.
- Proteger logs contra alteração silenciosa.
- Definir acesso aos registros de auditoria.
- Aplicar controles de segurança definidos.
- Revisar tratamento de dados pessoais.

Entregáveis:

- Auditoria operacional.
- Regras de acesso aos logs.
- Checklist básico de segurança.

Critério de pronto:

- Ações críticas devem ser rastreáveis e não apagáveis silenciosamente.

## Etapa 16: Testes

Objetivo: validar regras e reduzir risco antes da entrega.

Atividades:

- Testar fluxos públicos.
- Testar login e permissões.
- Testar separação entre vilas.
- Testar correspondências.
- Testar reservas e conflitos de agenda.
- Testar pagamentos.
- Testar auditoria.
- Testar responsividade.
- Testar casos de erro.

Entregáveis:

- Lista de testes executados.
- Correções aplicadas.
- Pendências conhecidas.

Critério de pronto:

- Fluxos principais devem funcionar sem quebra e sem vazamento entre vilas.

## Etapa 17: Homologação

Objetivo: validar o sistema com representantes da associação antes da produção.

Atividades:

- Apresentar os fluxos principais.
- Coletar ajustes.
- Corrigir problemas encontrados.
- Validar regras de negócio com usuários reais.
- Confirmar textos, permissões e telas.

Entregáveis:

- Registro de aprovação ou pendências.
- Ajustes finais da versão.

Critério de pronto:

- A associação deve aprovar a versão antes da publicação final.

## Etapa 18: Publicação

Objetivo: colocar o site em ambiente acessível aos usuários finais.

Atividades:

- Preparar ambiente de produção.
- Configurar domínio, HTTPS e variáveis sensíveis.
- Configurar backup.
- Configurar monitoramento básico.
- Publicar versão aprovada.
- Validar acesso em celular, tablet e desktop.

Entregáveis:

- Site publicado.
- Checklist de produção.
- Instruções de operação.

Critério de pronto:

- O site deve estar acessível, seguro e com dados protegidos.

## Etapa 19: Operação e manutenção

Objetivo: manter o sistema funcionando depois da entrega.

Atividades:

- Acompanhar erros.
- Realizar backups.
- Corrigir falhas.
- Atualizar conteúdo.
- Registrar novas demandas.
- Planejar melhorias futuras.

Entregáveis:

- Rotina de manutenção.
- Histórico de incidentes e melhorias.
- Próximo backlog de evolução.

Critério de pronto:

- Deve existir um processo claro para suporte, correções e evolução.

## Dependências críticas antes do desenvolvimento

- Valor da reserva.
- Regras de uso da churrasqueira.
- Modelo de confirmação manual do Pix.
- Recuperação de senha.
- Permissões detalhadas.
- Regras de auditoria e acesso aos logs.
- Política mínima de dados pessoais e LGPD.
- Hospedagem e ambiente de produção.

## Ordem recomendada de execução

1. Fechar requisitos mínimos.
2. Definir MVP.
3. Mapear telas e fluxos.
4. Modelar dados.
5. Escolher tecnologia.
6. Preparar projeto.
7. Construir site público.
8. Construir login e perfis.
9. Construir correspondências.
10. Construir árvore familiar e atualização cadastral.
11. Retomar reservas somente após suspensão ser encerrada.
12. Retomar Pix somente junto com reservas.
13. Construir notificações.
14. Construir conteúdo administrativo.
15. Implementar auditoria e segurança.
16. Testar.
17. Homologar.
18. Publicar.
19. Manter.
