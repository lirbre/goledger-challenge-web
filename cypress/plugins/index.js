const injectNextDevServer = require('@cypress/react/plugins/next')

module.exports = (on, config) => {
  if (config.testingType === 'component') {
    injectNextDevServer(on, config)
  }
  return config
}
