require('depject')(
  require('./modules_core'),
  require('./modules_basic'),
  require('./modules_extra')
).plugs.app[0]()

