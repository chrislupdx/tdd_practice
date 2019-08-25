const test = QUnit.test;

function sortUrl(array) {
    //iterate through the array and play war with the next value with the previous
    //move through the array and compare the value of string to array[position of next]
    const newArray = [];
    array.forEach(string => {
        const nextNumber = array.indexOf(string) + 1;
        const nextLength = array[nextNumber].length;

        // eslint-disable-next-line eqeqeq
        if(string.length > nextLength) {
            newArray.push(string);
        }
        if(string.length < nextLength) {
            newArray.unshift(string);
        }
        // eslint-disable-next-line eqeqeq
        if(array.lastIndexOf(string) == 0) {
            console.log('last item is', string);
        }
        console.log(array.length, 'newarray');
        return newArray;
    });
}


QUnit.module('day one');

test('sortUrl returns a list of re-arranged strings by length', assert => {
    const array = ['this', 'cheese', 'is', 'terrible'];
    const arranged = sortUrl(array);
    const expected = ['is', 'this', 'cheese', 'terrible'];

    assert.equal(arranged, expected);
});

// test('sortUrl returns a list of string character lengths', assert => {
//     const array = ['we', 'all', 'succumb'];
//     const lengths = sortUrl(array);
//     const expected = [2, 3, 7];
//     assert.deepEqual(lengths, expected);
// });

// test('sortUrl returns length of array of numbers', assert => {
//     const array = [1, 2, 3, 4];
//     const sorted = sortUrl(array);
//     const expected = 4;
//     assert.equal(sorted, expected);
// });

// test('sortUrl returns length of an array of strings', assert => {
//     const array = ['we', 'all', 'succumb'];
//     const strings = sortUrl(array);
//     const expected = 3;
//     assert.equal(strings, expected);
// });
