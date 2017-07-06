const assert = require('assert');
const server = require('./server.js');

server.start((err) => {
  assert(!err, err);

  console.log('Server running on ' + server.info.uri);
});
