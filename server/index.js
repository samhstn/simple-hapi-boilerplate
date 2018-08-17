const assert = require('assert');
const {setup, server} = require('./server.js');

const start = async () => {
  await setup();

  await server.start();

  console.log('Server running on ' + server.info.uri);
};

start();
