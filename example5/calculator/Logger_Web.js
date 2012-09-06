define('calculator/Logger', ['jquery'], function ($) {
    var WebLogger = function () {

    }

    WebLogger.prototype.log = function (msg) {
        $('#log').append(msg + '<br>');
    };

    return WebLogger;
});




