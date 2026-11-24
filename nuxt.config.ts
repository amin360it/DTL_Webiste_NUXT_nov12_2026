export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Page Not Found',
      titleTemplate: '%s | DHAKATHAI ALCOMAXX PLC',
      script: [
        {
          innerHTML:
            "(function(){try{var s=localStorage.getItem('dtl-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})()"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/img/favicon8a1a.ico' },
        { rel: 'apple-touch-icon', href: '/assets/img/dtl_logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://i.ytimg.com' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap'
        }
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0a1220', media: '(prefers-color-scheme: dark)' },
        { name: 'author', content: 'DHAKATHAI ALCOMAXX PLC' },
        { name: 'geo.region', content: 'BD-13' },
        { name: 'geo.placename', content: 'Dhaka' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://dhakathaibd.com'
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap-grid.min.css',
    '~/assets/css/main.css',
    '~/assets/css/mobile-grid.css',
    '~/assets/css/motion.css',
    '~/assets/css/manufacturing.css',
    '~/assets/css/theme.css'
  ],
  nitro: {
    output: {
      publicDir: 'dist'
    }
  }
})