const path = require('path');
const { override, getBabelLoader } = require('customize-cra');

module.exports = override(removeBuiltinBabelConfig, enableBabelConfig);

function removeBuiltinBabelConfig(config) {
  const loader = getBabelLoader(config);

  loader.options.presets = [];
  loader.options.plugins = [];

  return config;
}

function enableBabelConfig(config) {
  const loader = getBabelLoader(config);
  loader.options.configFile = path.resolve(__dirname, 'babel.config.js');
  return config;
}
