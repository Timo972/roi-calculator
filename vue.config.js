module.exports = {
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'Mining Profit Calculator'
            return args
        })
    },

    transpileDependencies: ['vuetify'],
}
