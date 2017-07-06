const routes = [
  {
    method: 'get',
    path: '/',
    handler: (request, reply) => reply.view('index', { message: 'Hello World' })
  },
  {
    method: 'get',
    path: '/resource/{param*}',
    handler: { directory: { path: 'public' } }
  }
]

module.exports = routes;
