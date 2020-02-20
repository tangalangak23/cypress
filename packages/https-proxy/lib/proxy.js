// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const CA = require('./ca')
const Server = require('./server')

module.exports = {
  create (dir, port, options) {
    return CA.create(dir)
    .then((ca) => {
      return Server.create(ca, port, options)
    })
  },

  reset () {
    return Server.reset()
  },

  httpsServer (onRequest) {
    return require('../test/helpers/https_server').create(onRequest)
  },

}