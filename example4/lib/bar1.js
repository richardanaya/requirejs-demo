define(['lib/shared','logger'], function (shared, logger) {
    var doSomething = function () {
        logger.log(shared.increment());
    };

    return {doSomething:doSomething};
});




