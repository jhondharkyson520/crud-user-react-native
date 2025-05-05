
# CRUD de Usuários em React Native

Este projeto é uma aplicação mobile desenvolvida em **React Native** com **TypeScript**, que consome uma **API RESTful** para realizar operações de CRUD (Create, Read, Update, Delete) de usuários. O objetivo principal é aplicar os conceitos de **Clean Architecture**, **SOLID** e **Clean Code**, mantendo uma estrutura organizada e escalável para aplicações mobile.

## Tecnologias Utilizadas

- **React Native**
- **TypeScript**
- **Axios** (Para consumo da API)
- **Styled Components**
- **Princípios SOLID**
- **Arquitetura Limpa** (Clean Architecture)

## Estrutura do Projeto

O projeto segue uma estrutura de pastas que reflete os princípios da Arquitetura Limpa:

```
/app
   _layout.tsx  — Componente de layout padrão para navegação
   create.tsx   — Tela para criar um novo usuário
   index.tsx    — Tela inicial (Home)
   users.tsx    — Tela para listar usuários
/src
  /hooks
    useResponsive.tsx   — Hook customizado para lidar com responsividade
  /infrastructure
    /services
      api.ts      — Configuração da instância Axios para consumo da API
  /presentation
      /components
         ButtonBack.tsx        — Botão para voltar
         CustomButton.tsx      — Botão customizado reutilizável
         CustomInput.tsx       — Campo de entrada customizado
         DeleteButton.tsx      — Botão de exclusão
         EditButton.tsx        — Botão de edição
      /screen
         CreateScreen.tsx      — Tela com formulário de cadastro de usuário
         HomeScreen.tsx        — Tela inicial da aplicação
         UsersScreen.tsx       — Tela de listagem e manipulação de usuários
  
```

### Funcionalidades

* Criar novo usuário com nome e e-mail
* Listar todos os usuários cadastrados
* Atualizar dados de um usuário
* Excluir usuário
* Design responsivo

## Princípios de Arquitetura Limpa (Clean Architecture)

O app segue os princípios da **Clean Architecture** dividindo responsabilidades de forma clara:

1. **Camada de Apresentação (Presentation)**: Componentes visuais, telas e navegação.
2. **Camada de Infraestrutura**: Comunicação com serviços externos, como APIs.
3. **Camada de Domínio (implícita)**: As decisões de negócio são tratadas nos próprios componentes ou serviços seguindo os princípios de responsabilidade única.

## Princípios SOLID Aplicados

O projeto também segue os princípios de **SOLID**, que são:

1. **S** - **Single Responsibility Principle**: Cada componente, hook e serviço tem uma única responsabilidade clara.
2. **O** - **Open/Closed Principle**: O código pode ser estendido (com novos componentes, serviços), sem alterar o que já existe.
3. **L** - **Liskov Substitution Principle**: Componentes reutilizáveis podem ser trocados sem quebrar o app.
4. **I** - **Interface Segregation Principle**: Cada componente e hook faz exatamente o que precisa.
5. **D** - **Dependency Inversion Principle**: O consumo da API é feito via serviço (api.ts), desacoplado das telas.

## Como Rodar o Projeto

### Requisitos

- Node.js (versão 16 ou superior)
- Expo

### Passos para Rodar

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/jhondharkyson520/crud-user-react-native.git
   cd crud-user-react-native
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Configure o endpoint da API no arquivo src/infrastructure/services/api.ts :**
   ```
   baseURL: 'http://localhost:3000' (ou IP da sua máquina se estiver rodando no emulador físico)
   ```
4. **Inicie o projeto**:
   ```bash
   npm start
   ou
   expo start
   ```

5. **Rodar o servidor**:
   ```bash
   npm run dev
   ```

O app abrirá no navegador e você poderá rodá-lo em um emulador ou dispositivo físico usando o aplicativo Expo.

## Conclusão

Este projeto é um exemplo prático de como desenvolver uma aplicação mobile em **React Native** consumindo uma **API RESTful**, com uma estrutura modular baseada em boas práticas de desenvolvimento, **Clean Architecture** e os princípios **SOLID**. Ideal para aprendizado e projetos escaláveis no ambiente mobile.
