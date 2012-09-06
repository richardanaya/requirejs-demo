define('calculator/view/CalculatorView',
    [
        "readline",
        "calculator/Observer"
    ],
    function (readline, Observer) {
        var ConsoleCalculatorView = function () {
            this.requestCalculation = new Observer();
            this.repl = readline.createInterface({
                input:process.stdin,
                output:process.stdout
            });
        };

        ConsoleCalculatorView.prototype.initialize = function () {
            this.ask();
        };

        ConsoleCalculatorView.prototype.ask = function () {
            this.repl.question("Enter in your calculation: ", this.onInput.bind(this));
        };

        ConsoleCalculatorView.prototype.onInput = function (line) {
            if (line && line.length > 1) {
                this.requestCalculation.fire(line);
            }
            this.ask();
        };

        ConsoleCalculatorView.prototype.displayResult = function (msg) {
            console.log("Result: " + msg)
        };

        return ConsoleCalculatorView;
    }
);


