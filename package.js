Package.describe({
  summary: "Role based access control system"
})

Package.on_use(function (api) {
  var both = ['client', 'server']
  api.use(['underscore', 'handlebars', 'accounts-base'], both)

  api.export && api.export('AuthManager')

  api.add_files('collections.js', both)
  api.add_files('collections_server.js', 'server')

  api.add_files('lib/auth_manager.js', both)
  api.add_files('lib/auth_manager_server.js', 'server')

  api.add_files('models/auth_item.js', both)

  api.add_files('publications.js', 'server')
  api.add_files('subscriptions.js', 'client')

  api.add_files('roles_client.js', 'client')
})

Package.on_test(function (api) {
  // include accounts-password so Meteor.users exists
  api.use(['authorization', 'accounts-password', 'tinytest'], 'server')

  api.add_files('tests/server.js', 'server')
  api.add_files('tests/client.js', 'client')
})
