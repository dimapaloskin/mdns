var bonjour = require('bonjour')()
 
bonjour.publish({ name: 'Web server', type: 'http', port: 31337 })
 
bonjour.find({ type: 'http' }, function (service) {
  console.log('Found an HTTP server:', service)
})
