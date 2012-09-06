define('calculator/Logger', function () {
    var ConsoleLogger = function () {

    }

    ConsoleLogger.prototype.log = function (msg) {
        console.log(msg)
    };

    return ConsoleLogger;
});


