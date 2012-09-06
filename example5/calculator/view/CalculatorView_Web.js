define('calculator/view/CalculatorView',
    [
        "jquery",
        "calculator/Observer"
    ],
    function ($, Observer) {
        var WebCalculatorView = function () {
            this.requestCalculation = new Observer();
            this.rootElement = $('<div><div class="result"></div><button class="calculator_button">c</button><button class="calculator_button">+</button><button class="calculator_button">-</button><button class="calculator_button">*</button><button class="calculator_button">/</button><button class="calculator_button">1</button><button class="calculator_button">2</button><button class="calculator_button">3</button><button class="calculator_button">4</button><button class="calculator_button">5</button><button class="calculator_button">6</button><button class="calculator_button">7</button><button class="calculator_button">8</button><button class="calculator_button">9</button><button class="calculator_button">0</button><button class="calculator_button">=</button></div>').get(0);
            this.resultElement = $('.result',this.rootElement).get(0);
            $('.calculator_button',this.rootElement).click(this.onCalculateButtonClicked.bind(this));
        };

        WebCalculatorView.prototype.onCalculateButtonClicked = function(e){
            var symbol = $(e.target).html();
            if(symbol == '='){
                var txt = $(this.resultElement).html();
                this.requestCalculation.fire(txt);
            }
            else if(symbol == 'c'){
                $(this.resultElement).html('');
            }
            else {
                $(this.resultElement).html( $(this.resultElement).html()+symbol);
            }
        };

        WebCalculatorView.prototype.initialize = function () {
            $(document.body).append(this.rootElement);
        };

        WebCalculatorView.prototype.displayResult = function (msg) {
            $(this.resultElement).html(msg);
        };

        return WebCalculatorView;
    }
);