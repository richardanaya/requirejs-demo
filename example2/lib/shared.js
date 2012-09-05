define(['lib/shared'], function (shared) {
    var count = 0;

    var increment = function () {
        count++;
        return count;
    };

    return {increment:increment};
});


