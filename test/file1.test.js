const test = QUnit.test;

function sortUrl(array) {
    const length = array.length;
    return length;
}

QUnit.module('day one');

test('sortUrl returns length of array of numbers', assert => {
    const array = [1, 2, 3, 4];
    const sorted = sortUrl(array);
    const expected = 4;
    assert.equal(sorted, expected);
});

test('sortUrl returns length of an array of strings', assert => {
    const array = ['we', 'all', 'succumb'];
    const strings = sortUrl(array);
    const expected = 3;
    assert.equal(strings, expected);
});
