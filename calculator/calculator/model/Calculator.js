define(['calculator/Logger'], function (Logger) {
    var Calculator = function () {
        this.logger = new Logger();
    };

    Calculator.prototype.add = function (a, b) {
        this.logger.log('adding ' + a + ' and ' + b + '.')
        return a + b;
    };

    Calculator.prototype.multiply = function (a, b) {
        this.logger.log('multiplying ' + a + ' and ' + b + '.')
        return a * b;
    };

    Calculator.prototype.divide = function (a, b) {
        this.logger.log('dividing ' + a + ' and ' + b + '.')
        return a / b;
    };

    Calculator.prototype.subtract = function (a, b) {
        this.logger.log('subtracting ' + a + ' and ' + b + '.')
        return a - b;
    };

    return Calculator
});
