var shared = require('./shared');

var doSomething = function(){
    console.log(shared.increment());
};

exports.doSomething = doSomething;
