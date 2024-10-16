const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'pawsitive-vibes',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

