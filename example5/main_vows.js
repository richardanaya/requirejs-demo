var requirejs = require('./r');

requirejs.config({
    nodeRequire:require
});

requirejs(
    [
        'vows',
        "vows/lib/vows/reporters/spec",
        'calculator/Logger_Null',
        'calculator/model/Calculator_tests'
    ],
    function (vows, spec) {
        var i = 0;
        var runTestSuite = function(){
            if(i < vows.suites.length){
                vows.suites[i].run({reporter:spec},function(){
                    runTestSuite();
                });
                i++;
            }
        };
        runTestSuite();
    }
);