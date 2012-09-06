requirejs(
    [
        //third party libs
        'require-jquery',
        //call on specific implementations to offer themselves
        'calculator/Logger_Web',
        'calculator/view/CalculatorView_Web',
        //call on the app to start itself
        'calculator/App'
    ],
    function () {}
);