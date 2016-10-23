module.exports = class Mediator {
  constructor () {
    this.topics = {}
  }
  on (topic, callback) {
    if(!this.topics.hasOwnProperty(topic)) {
      this.topics[topic] = []
    }
    this.topic[topic].push(callback)
    return this
  }
  off () {
    if(!this.topics.hasOwnProperty(topic))
      return this
    if(typeof callback === 'function')
      this.topics.splice(1, this.topics.indexOf(callback))
    else
      this.topics[topic] = []
    return this
  }
  static mediate (obj, m = new Mediator()) {
    obj.on = m.on
    obj.off = m.off
    return obj
  }
}
