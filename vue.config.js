const externals = require('./vue-externals.config')

module.exports = {
  transpileDependencies: ['vuex-module-decorators'],
  devServer: {
    https: false,
    port: 4200,
    host: '0.0.0.0',
    public: '0.0.0.0',
    hot: false,
    disableHostCheck: true,
  },
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ? externals : {},
  },
}
