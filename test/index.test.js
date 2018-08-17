const tape = require('tape');
const {server, setup} = require('../server/server.js');

tape('setup', async (t) => {
  await setup();
  t.end();
});

tape('GET :: /', (t) => {
  server.inject('/')
    .then((res) => {
      t.equal(res.statusCode, 200);
      t.ok(res.payload.includes('<h1>Hello World</h1>'))
      t.end();
    });
});
