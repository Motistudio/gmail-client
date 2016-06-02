var Mediator = function(){
  this.topics = {};
};
Mediator.prototype = {
  on: function(topic, callback){
    if(this.topics.hasOwnProperty(topic))
      this.topic[topic].push(callback);
    else
      this.topics[topic] = [callback];
    return this;
  },
  off: function(topic, callback){
    if(!this.topics.hasOwnProperty(topic))
      return this;
    if(typeof callback === 'function')
      this.topics.splice(1, this.topics.indexOf(callback));
    else
      this.topics[topic] = [];
    return this;
  }
};
Mediator.mediate = function(obj, m){
  var m = m || new Mediator();
  obj.on = m.on;
  obj.off = m.off;
  return obj;
};
module.exports = Mediator;
