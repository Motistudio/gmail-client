const Mediator = require('./mediator')
class Authentication {
  static init () {

  }
  /**
   * Return true if user is authenticated
   * @return {Boolean}
   */
  static isAuthenticated () {
    return false
  }
}

// mediates
Mediator.mediate(Authentication)

/**
 * @exports Authentication class
 */
module.exports = Authentication
