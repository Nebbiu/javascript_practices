var assert = require('assert');
var count = require('./count.js');

describe('Compter les points au tennis', function () {

    it('should be loaded', function () {
        assert.equal(true, true);

    });

    it('15, 0', function () {
        assert.deepEqual(count('1'), [15, 0]);

    });
    
    it('0, 15', function () {
        assert.deepEqual(count('2'), [0, 15]);

    });
    
    it('15, 15', function () {
        assert.deepEqual(count('12'), [15, 15]);

    });
    
    it('30, 15', function () {
        assert.deepEqual(count('112'), [30, 15]);

    });
    it('15, 15', function () {
        assert.deepEqual(count('21'), [15, 15]);

    });

    
});
