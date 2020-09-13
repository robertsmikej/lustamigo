
export default {
    mode: 'universal',
    target: 'static',
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon/favicons/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: "16x16", href: "/favicon/favicons/favicon-16x16.png" },
            { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/favicons/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: "192x192", href: "/favicon/favicons/android-icon-192x192.png" },
            { rel: "apple-touch-icon-precomposed" , href: '/favicon/favicons/apple-icon-precomposed.png' },
            { rel: 'mask-icon', color: "#5bbad5", href: '/favicon/favicons/safari-pinned-tab.svg' },
            { property: "og:image", content: "/favicon/apple-icon-180x180.png"  },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Neucha&display=swap' }
        ]
    },
    css: [

    ],
    plugins: [
        "~/plugins/global.js",
        "~/plugins/uuid.js"
    ],
    components: true,
    buildModules: [

    ],
    modules: [
        '@nuxtjs/markdownit',
        ['vue-scrollto/nuxt', { duration: 300 }],
        '@nuxtjs/gtm',
    ],
    gtm: {
        id: 'GTM-T6TRWR7',
        pageTracking: true,
        debug: false
    },
    markdownit: {
        injected: true
    },
    build: {

    }
}
