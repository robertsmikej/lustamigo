
export default {
    mode: 'universal',
    target: 'static',
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    ],
    markdownit: {
        injected: true
    },
    build: {

    }
}
