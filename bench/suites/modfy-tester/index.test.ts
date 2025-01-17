const assert = require('uvu/assert');
const math = require('../../math');
const { runTestGroup } = require('@modfy/estester-client')

runTestGroup("Basic bench", {
    'sum': () => {
        assert.type(math.sum, 'function');
        assert.is(math.sum(1, 2), 3);
        assert.is(math.sum(-1, -2), -3);
        assert.is(math.sum(-1, 1), 0);
    },
    'div': () => {
        assert.type(math.div, 'function');
        assert.is(math.div(1, 2), 0.5);
        assert.is(math.div(-1, -2), 0.5);
        assert.is(math.div(-1, 1), -1);
    },
    'mod': () => {
        assert.type(math.mod, 'function');
        assert.is(math.mod(1, 2), 1);
        assert.is(math.mod(-3, -2), -1);
        assert.is(math.mod(7, 4), 3);
    }
})
