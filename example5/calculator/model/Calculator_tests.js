define(['vows', 'assert', 'calculator/model/Calculator'], function (vows, assert, Calculator) {
    vows.describe('Calculator Tests').addBatch({
        'Test some operations of calculator':{
            topic:function () {
                return new Calculator();
            },
            'Does adding':function (topic) {
                var expected = 2;
                var result = topic.add(1, 1);
                assert(expected, result);
            },
            'Does substracting':function (topic) {
                var expected = 2;
                var result = topic.subtract(4, 2);
                assert(expected, result);
            },
            'Does multiplying':function (topic) {
                var expected = 10;
                var result = topic.multiply(5, 2);
                assert(expected, result);
            },
            'Does does dividing':function (topic) {
                var expected = 2;
                var result = topic.divide(10, 5);
                assert(expected, result);
            }
        }
    });
});