define(function () {
    function Observer() {
        this.fns = [];
    }

    Observer.prototype.subscribe = function (fn) {
        this.fns.push(fn);
    };

    Observer.prototype.unsubscribe = function (fn) {
        this.fns = this.fns.filter(
            function (el) {
                if (el !== fn) {
                    return el;
                }
            }
        );
    };

    Observer.prototype.fire = function () {
        for(var i = 0 ; i < this.fns.length; i++){
            this.fns[i].apply(null, arguments);
        }
    }
    return Observer;
});



