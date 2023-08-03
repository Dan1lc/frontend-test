const { defineConfig } = require('@vue/cli-service');

const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      // vue
      .set('@pages', path.resolve(__dirname, 'src/pages/'))
      .set('@templates', path.resolve(__dirname, 'src/templates/'))
      .set('@components', path.resolve(__dirname, 'src/components/'))
      .set('@form', path.resolve(__dirname, 'src/components/_FormComponents/'))
      .set('@ui', path.resolve(__dirname, 'src/components/_UiComponents/'))
      //  utils
      .set('@hooks', path.resolve(__dirname, 'src/hooks/'))
      .set('@helpers', path.resolve(__dirname, 'src/helpers/'))
      .set('@validation', path.resolve(__dirname, 'src/helpers/validation'))
      //  store
      .set('@modules', path.resolve(__dirname, 'src/store/modules/'))
      // assets
      .set('@styles', path.resolve(__dirname, 'src/assets/styles/'))
      .set('@images', path.resolve(__dirname, 'src/assets/images/'))
      .set('@icons', path.resolve(__dirname, 'src/assets/icons/'))
      .set('@fonts', path.resolve(__dirname, 'src/assets/fonts/'));
  },
});
