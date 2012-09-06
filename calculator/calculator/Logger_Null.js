define('calculator/Logger', function () {
    var NullLogger = function () {

    }

    NullLogger.prototype.log = function (msg) {
        //be quiet
    };

    return NullLogger;
});


