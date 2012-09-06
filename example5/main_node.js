var requirejs = require('./r');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire:require
});

requirejs(
    [
        //call on specific implementations to offer themselves
        'calculator/Logger_Console',
        'calculator/view/CalculatorView_Console',
        //call on the app to start itself
        'calculator/App'
    ],
    function () {}
);