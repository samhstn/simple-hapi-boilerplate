const Hapi = require('hapi');
const assert = require('assert');

const plugins = require('./plugins/index.js');
const routes = require('./routes/index.js');

// following templating conventions from here:
// https://futurestud.io/tutorials/how-to-create-a-dynamic-handlebars-layout-template-in-hapijs
const views = {  
  engines: {
    html: require('handlebars')
  },
  path: 'views',
  layoutPath: 'views/layout',
  layout: 'default',
  relativeTo: __dirname
};

const server = Hapi.Server({ port: process.env.PORT || 4444 });

const setup = async () => {
  try {
    await server.register(plugins);
    server.views(views);
    server.route(routes);
  } catch (err) {
    assert(!err, err);
  }
}

module.exports = {server, setup};
