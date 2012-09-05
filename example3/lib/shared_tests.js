define(['vows', 'assert', 'lib/shared'], function (vows, assert, shared) {
    vows.describe('Shared Tests').addBatch({
        'Test some functionality of shared':{
            'Does increment() increment':function () {
                var n = shared.increment();
                var nPlusOne = shared.increment();

                assert.equal(n+1,nPlusOne);
            }
        }
    });
});