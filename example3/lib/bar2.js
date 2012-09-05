define(['lib/shared'], function (shared) {
    var doSomething = function () {
        console.log(shared.increment());
    };

    return {doSomething:doSomething};
});




