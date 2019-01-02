const path = require('path');

const rewireLess = require('react-app-rewire-less');

// 按需引入antd-mobile
const { injectBabelPlugin } = require('react-app-rewired');

const resolve = (url) => {
  return path.resolve(__dirname, './', url);
}

module.exports = function (config, env) {
  // 使用antd-mobile
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src')
  }

  // 处理less
  config = rewireLess(config, env);

  return config;
}
