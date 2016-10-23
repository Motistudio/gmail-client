const config = require('../config/conf')

/**
 * @class Configutation
 */
module.exports = class Configutation {
  /**
   * Get a property from the configutation or all of it if no property applied
   * @param {String?} prop - property for the configutations
   * @return {Object}
   */
  static get (prop = '') {
    return prop ? config[prop] : config
  }
}
