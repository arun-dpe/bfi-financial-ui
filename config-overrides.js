const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    "@common": "src/common",
    "@components": "src/common/components",
    "@containers": "src/containers",
    "@layouts": "src/layouts",
    "@routes": "src/routes",
    "@pages": "src/pages",
    "@config": "src/config",
    "@models": "src/models"
  })(config);

  return config;
};