define('logger',['jquery'], function ($) {
    var log = function (msg) {
        $(document.body).append(msg+'<br>');
    };

    return {log:log};
});




