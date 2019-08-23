// import sortUrl from '../src/sortUrl';

function sortUrl(array) {
    console.log(array);
    console.log(array.length);
    return array.length;
}

const test = QUnit.test;

QUnit.module('day one');
test('sortUrl knows how long arrays are', assert => {
    const array = ['we', 'all', 'succumb'];
    const expected = 3;

    const sorted = sortUrl(array);

    assert.htmlEqual(sorted, expected);
});
