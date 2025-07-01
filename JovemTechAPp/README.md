# JovemTechApp

## Descrição
O **JovemTechApp** é uma plataforma web desenvolvida com Quasar Framework (Vue.js) para apoiar o programa comunitário Jovem Tech, que incentiva a cultura de inovação e a capacitação inicial de jovens em Tecnologia da Informação e Computação (TI&C). O objetivo é aproximar jovens da comunidade Mário Quintana e Zona Norte de Porto Alegre do universo digital, preparando-os para desafios acadêmicos, sociais e profissionais.

## Funcionalidades
- **Login seguro** com validação de email e senha
- **Página inicial** com informações sobre o programa
- **Cards informativos** e layout responsivo
- **Footer com links sociais** (Instagram, GitHub dos desenvolvedores)
- **Mascote personalizado** com destaque visual
- **Design moderno** e responsivo para desktop e mobile

## Tecnologias Utilizadas
- [Quasar Framework](https://quasar.dev/) (Vue.js)
- SCSS para estilização customizada
- Estrutura de componentes reutilizáveis

## Estrutura de Pastas
```
JovemTechAPp/
  src/
    pages/
      HomePage.vue
      IndexPage.vue
      ErrorNotFound.vue
    layouts/
      HomeView.vue
      LoginPageLayout.vue
    css/
      app.scss
    assets/
      images/
        mascote.png
        aulafoto.png
        footer.png
        LogoHeader.png
        instagram.png
        gith.svg
```

## Como rodar o projeto
1. **Pré-requisitos:**
   - Node.js 20.x (LTS)
   - Quasar CLI instalado globalmente: `npm install -g @quasar/cli`

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   quasar dev
   ```

4. **Build para produção:**
   ```bash
   quasar build
   ```
   O build estará na pasta `dist/spa`.

## Deploy
- O projeto pode ser hospedado em Netlify, Vercel, Azure Static Web Apps ou qualquer serviço de hospedagem de SPA.
- Para Azure SWA, a pasta de saída é `dist/spa`.

## Desenvolvedores
- [CauanGuerreiro](https://github.com/dev1)
- [GustavoCamargo](https://github.com/dev2)

## Licença
MIT
