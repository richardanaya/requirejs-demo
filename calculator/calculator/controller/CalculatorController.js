define(function () {
    var Calculator = function (view, model) {
        this.view = view;
        this.model = model;
        this.view.requestCalculation.subscribe(this.onProcessCalculation.bind(this));
    };

    Calculator.prototype.initialize = function () {
        this.view.initialize();
    };

    Calculator.prototype.onProcessCalculation = function (calcString) {
        var calcRegex = /([\d\.]+)([\+\-\/\*])([\d\.]+)/;
        var matches = calcRegex.exec(calcString);
        var operandA = parseFloat(matches[1]);
        var op = matches[2];
        var operandB = parseFloat(matches[3]);

        var result = 'Error';
        try {
            if (op == '*') {
                result = this.model.multiply(operandA, operandB);
            }
            if (op == '+') {
                result = this.model.add(operandA, operandB);
            }
            if (op == '/') {
                result = this.model.divide(operandA, operandB);
            }
            if (op == '-') {
                result = this.model.subtract(operandA, operandB);
            }
        }
        catch (e) {
        }

        this.view.displayResult(result);
    };

    return Calculator
});
