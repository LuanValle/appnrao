# Protótipo do front-end

Este documento registra o estado aprovado da primeira etapa visual do portal da Associação das Vilas da Marinha.

## Estado

- **Situação:** protótipo visual aprovado em 3 de agosto de 2026.
- **Escopo atual:** site público, área simulada do morador, área administrativa demonstrativa, árvore familiar/cadastral e correspondências.
- **Experiência mobile:** interface responsiva navegável em largura de celular; aplicativo separado ainda não será criado.
- **Tecnologia confirmada:** React com Vite no front-end.
- **Fora do escopo atual:** backend, banco de dados, autenticação real, aplicativo nativo, reserva de churrasqueira, Pix, reembolsos e integrações reais.

## Confirmado

### Identidade visual

- A página inicial preserva a identidade institucional do site APPNRAO usado como referência.
- O cabeçalho e o rodapé apresentam apenas o nome APPNRAO, sem símbolo gráfico.
- A paleta visual usa azul institucional, branco e tons neutros.
- O banner principal utiliza o vídeo e a imagem de capa do site de referência.
- O banner de animais utiliza o vídeo original da seção e ocupa toda a largura da tela.
- O usuário aprovou o estado visual atual.

### Cabeçalho e navegação

- O cabeçalho permanece visível durante a rolagem.
- O menu completo é mostrado em telas grandes quando há espaço suficiente.
- Itens excedentes ficam agrupados no submenu **Mais**.
- Em celular e tablet, o menu abre em um painel vertical adaptado à tela.
- A navegação não deve produzir rolagem horizontal.

### Página inicial

- O banner principal apresenta o nome completo da associação e a frase institucional.
- Os atalhos rápidos ficam totalmente abaixo do banner, sem sobreposição.
- Os atalhos atuais representam correspondências, atualização familiar, publicações e entrada no portal.
- O conteúdo de boas-vindas foi dividido em cartões de convivência, áreas comuns, segurança e sustentabilidade.
- Links importantes e documentos usam cartões com imagens padronizadas.
- Telefones aparecem em cartões com ação de ligação.
- O rodapé foi separado em identidade, contato, acessos rápidos e endereço.
- A página inicial possui um carrossel de fotos com acesso à página pública de publicações.

### Área do morador

- O login é simulado por seleção de perfil.
- O titular visualiza o próprio PNR e a composição familiar.
- O titular pode cadastrar, editar e remover integrantes do núcleo familiar.
- A família é persistida no navegador para a demonstração.
- Correspondências podem ser associadas ao titular ou a um integrante cadastrado.

### Reservas suspensas

- O módulo de churrasqueira está oculto no protótipo.
- As regras permanecem documentadas como escopo futuro.
- Pagamento Pix, reembolso e notificações de reserva também estão suspensos.

### Responsividade

- A interface deverá funcionar em computador, celular e tablet.
- No celular, o topo de contatos é ocultado para priorizar o conteúdo.
- O cabeçalho móvel é compacto e o menu utiliza áreas de toque maiores.
- Seções institucionais usam cartões, bordas arredondadas e espaçamento adequado para telas pequenas.
- Imagens, vídeos, textos e grades se adaptam à largura disponível.
- Animações devem ser discretas e respeitar a preferência do usuário por movimento reduzido.

## Consequência prática

O protótipo define a direção visual da página inicial, mas ainda não representa um sistema funcional completo. Parte dos links continua apontando para o site de referência ou servindo como marcador até que as páginas e os fluxos reais sejam construídos.

## Sugestões

- Criar as páginas reais de correspondências, login, publicações e conteúdo institucional.
- Validar a árvore familiar com a Associação e definir quais integrantes poderão ter acesso próprio.
- Criar estados visuais de carregamento, vazio, sucesso e erro.
- Transformar os atalhos rápidos em navegação interna quando as rotas existirem.
- Preparar uma biblioteca pequena de componentes visuais reutilizáveis.

## Riscos

- Os vídeos e as imagens ainda são carregados por endereços externos do site de referência; uma alteração ou indisponibilidade nesses endereços pode quebrar partes do visual.
- Links provisórios podem levar o usuário para fora do novo portal.
- Conteúdo e contatos copiados da referência podem ficar desatualizados se não houver uma fonte administrativa única.
- O aceite visual não substitui testes completos de acessibilidade, desempenho e compatibilidade entre navegadores.

## Pendente

- Definir quais conteúdos e arquivos serão hospedados no próprio portal.
- Definir as rotas e páginas internas definitivas.
- Reativar o atalho de reserva somente quando o módulo for oficialmente retomado.
- Validar textos, contatos, endereços e responsáveis antes da publicação oficial.
- Realizar testes de acessibilidade, desempenho e compatibilidade em aparelhos reais.

## Arquivos principais

- `src/App.jsx`: estrutura e conteúdo da página inicial.
- `src/styles.css`: identidade visual, animações e responsividade.
- `src/main.jsx`: inicialização da aplicação React.
- `index.html`: metadados básicos da página.
