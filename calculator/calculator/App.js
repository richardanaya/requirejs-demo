define(
    [
        'calculator/Logger_Console',
        'calculator/model/Calculator',
        'calculator/view/CalculatorView',
        'calculator/controller/CalculatorController'
    ],
    function (Logger, Calculator, CalculatorView, CalculatorController) {
        var model = new Calculator();
        var view = new CalculatorView();
        var controller = new CalculatorController(view, model);
        controller.initialize();
    }
);


