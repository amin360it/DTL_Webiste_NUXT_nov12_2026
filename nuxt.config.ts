export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Page Not Found',
      titleTemplate: '%s | DHAKATHAI ALCOMAXX PLC',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/img/favicon8a1a.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://dhakathaibd.com'
    }
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    output: {
      publicDir: 'dist'
    }
  }
})