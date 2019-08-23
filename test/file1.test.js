// import sortUrl from '../src/sortUrl';

function sortUrl(array) {
    return array.length;
}

const test = QUnit.test;

QUnit.module('day one');
test('sortbylength can consume array and ', assert => {
    const array = ['we', 'all', 'succumb'];
    // const expected = ['we', 'all', 'succumb'];
    const expected = 3;
    const sorted = sortUrl(array);

    assert.htmlEqual(sorted, expected);
});
