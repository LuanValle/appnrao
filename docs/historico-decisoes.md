# Histórico de decisões

Este documento registra decisões confirmadas. Sugestões e dúvidas permanecem nos documentos de cada módulo e não entram aqui como decisão.

## 1 de agosto de 2026

### Produto

- O portal atenderá a Vila Buriti e a Vila Humaitá em um único sistema com separação lógica de dados.
- Os perfis iniciais serão proprietário ou morador, dependente sem login, administrador da vila e administrador geral.
- Não haverá perfil de portaria.
- O cadastro de usuários será feito por administrador enquanto o autocadastro permanecer pendente.
- O módulo de correspondências seguirá as regras registradas em [Correspondências](03-correspondencias.md).
- O proprietário poderá manter somente uma reserva futura ativa de churrasqueira por vez.
- O pagamento via Pix será obrigatório para a reserva.
- O administrador geral poderá editar conteúdo institucional simples.
- Ações críticas exigirão auditoria.
- O levantamento continuará antes da escolha de tecnologia ou do desenvolvimento.

### Documentação e publicação

- A documentação será organizada por módulos.
- O repositório público será `LuanValle/associacao-vilas-marinha`.
- Por ser público, o repositório não deverá receber dados pessoais ou informações internas sensíveis.
- A sincronização ocorrerá somente quando for solicitada.
- As mudanças serão preparadas em branch e revisadas antes de entrar na versão principal.

## 3 de agosto de 2026

### Reservas de churrasqueiras

- A Vila Buriti possui 8 churrasqueiras.
- A Vila Humaitá possui 8 churrasqueiras.
- As churrasqueiras serão identificadas por numeração.
- As churrasqueiras poderão ser reservadas das 08:00 às 22:00.
- As churrasqueiras poderão ser reservadas todos os dias.
- O administrador poderá retirar uma churrasqueira do ar, deixando-a indisponível para novas reservas.
- O morador poderá escolher a duração da reserva.
- O morador poderá reservar o dia inteiro disponível, dentro do horário de 08:00 às 22:00.
- A reserva não poderá ultrapassar 1 dia.
- A duração mínima da reserva será de 1 hora.
- Os horários de início e fim da reserva serão escolhidos apenas em hora cheia.

### Planejamento

- O levantamento de requisitos foi pausado no módulo de reservas de churrasqueiras.
- O projeto passará a contar com um plano de construção do site separado em etapas, do início à publicação e manutenção.

### Front-end

- O front-end será desenvolvido com React.
- A interface deverá ser responsiva para computador, celular e tablet.
- A construção será apresentada em etapas para aprovação antes do avanço.
- A primeira direção visual da página inicial foi aprovada.
- A página inicial manterá a identidade institucional da APPNRAO, com uso autorizado dos recursos visuais do site de referência.
- No celular, a interface seguirá uma apresentação mais próxima de aplicativos atuais, com cabeçalho compacto, painel de menu e conteúdo em cartões.
- Os atalhos rápidos deverão ficar abaixo do banner principal, sem sobreposição.
- O banner da seção de animais ocupará toda a largura da tela.
- O cabeçalho e o rodapé usarão apenas o nome APPNRAO, sem símbolo gráfico.
- O estado detalhado do protótipo está registrado em [Protótipo do front-end](10-prototipo-front-end.md).

## 4 de agosto de 2026

### Revisão das regras de churrasqueira

- O módulo de reserva de churrasqueira existirá somente para a Vila Buriti; a Vila Humaitá não participará desse módulo.
- Toda reserva terá duração fixa de 24 horas.
- A reserva começará às 09:00 do dia escolhido e terminará às 09:00 do dia seguinte.
- Entre 22:00 e 09:00, a churrasqueira continuará vinculada à reserva, mas seu uso será proibido.
- O valor de cada agendamento será de R$ 22,00.
- O novo horário de funcionamento será das 09:00 às 22:00.
- Não será necessário aceitar um termo de responsabilidade para concluir a reserva.
- O administrador terá um botão para desativar uma churrasqueira; enquanto estiver desativada, ela ficará oculta e indisponível para novas reservas.
- A desativação da churrasqueira cancelará as reservas futuras que já estiverem confirmadas para ela.
- Quando a administração cancelar uma reserva paga por desativação da churrasqueira, o valor de R$ 22,00 deverá ser devolvido integralmente ao morador.
- O morador poderá cancelar a própria reserva mesmo depois que ela já estiver paga.
- Quando o morador cancelar uma reserva já paga, ele terá direito à devolução integral dos R$ 22,00.
- O reembolso ao morador só será devido quando o cancelamento for feito com pelo menos 24 horas de antecedência do início da reserva.
- Se o morador cancelar com menos de 24 horas de antecedência do início da reserva, ele perderá o valor pago.
- Não haverá penalidade adicional para o morador em caso de cancelamento com menos de 24 horas de antecedência.
- O Pix da reserva será manual, sem integração automática por API nesta versão.
- Após o morador solicitar a reserva, ela ficará com status pendente até a administração confirmar manualmente o pagamento.
- Enquanto estiver pendente, a reserva já bloqueará a churrasqueira para outros moradores.
- Se o pagamento não for confirmado em até 24 horas, a reserva pendente deverá expirar automaticamente.
- O morador deverá ser avisado dentro do sistema e por WhatsApp quando a reserva pendente expirar por falta de confirmação do pagamento.
- O administrador confirmará manualmente o pagamento da reserva.
- Após a confirmação manual do pagamento pelo administrador, a reserva mudará de pendente para confirmada.
- No pagamento inicial da reserva, o comprovante será opcional; o morador poderá anexá-lo para agilizar a conferência pela administração.
- Quando o morador pedir reembolso, deverá preencher um formulário de devolução e anexar o comprovante do pagamento feito.
- O pedido de reembolso poderá ser analisado e aprovado pelo administrador da vila ou pelo administrador geral.
- O administrador da vila só poderá atuar em pedidos de reembolso da própria vila.
- Depois que o reembolso for aprovado, a administração terá até 24 horas para fazer a devolução do Pix.
- Se houver pagamento Pix duplicado ou valor diferente de R$ 22,00, o administrador poderá corrigir manualmente o registro.
- Informações de pagamento poderão ser consultadas e alteradas pelo administrador da vila e pelo administrador geral.
- O administrador da vila só poderá consultar e alterar informações de pagamento da própria vila.
- Alterações em pagamentos e reembolsos deverão exigir justificativa obrigatória do administrador.
- Essas decisões substituem as regras anteriores de reserva nas duas vilas, funcionamento das 08:00 às 22:00, duração escolhida pelo morador, mínimo de 1 hora e horários em hora cheia.

## 8 de outubro de 2026

### Escopo do protótipo

- O protótipo terá site responsivo e experiência mobile navegável na mesma aplicação.
- O módulo de reservas de churrasqueira ficará suspenso e oculto no protótipo.
- Pagamento Pix, reembolso e notificações de reserva também ficam para uma etapa futura.
- O morador titular poderá cadastrar integrantes do núcleo familiar vinculados ao próprio PNR.
- A árvore familiar/cadastral permitirá visualizar, adicionar, editar e remover integrantes sem login no protótipo inicial.
- O titular ou administrador poderá associar correspondências ao titular ou a integrante cadastrado.
- Os dados do protótipo serão fictícios e persistidos somente no navegador.
