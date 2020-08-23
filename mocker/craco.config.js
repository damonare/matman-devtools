const path = require('path');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        modifyLessRule: (lessRule, context) => ({
          ...lessRule,
          exclude: path.join(__dirname, 'node_modules'),
        }),
      },
    },
  ],
};
