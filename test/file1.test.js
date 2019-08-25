const test = QUnit.test;

function sortUrl(array) {
    //iterate through the array and play war with the next value with the previous
    //move through the array and compare the value of string to array[position of next]
    const newArray = [];
    array.forEach(string => {
        function nextLength(nextNumber) {
            if(array[nextNumber].length == undefined) {
                console.log()
                return 
            }

        }
        const nextNumber = array.indexOf(string) + 1;
        const nextLength = array[nextNumber].length;

        if(string.length > nextLength) {
            newArray.push(string);
            console.log('greater', string);
            console.log(array.indexOf(string), 'array pos');
        }
        if(string.length < nextLength) {
            newArray.unshift(string);
            console.log('less', string);
            console.log(array.indexOf(string), 'array pos');
        }
        // eslint-disable-next-line eqeqeq
        if(array.indexOf(string) == array.length - 2) {
            console.log('last', string);
            console.log(array.indexOf(string), 'array pos');
        }
        return newArray;
    });
}
//treesorting is beautiful and feels performant but I can't figure out how to make this tree touch the last item
//i'm really tempted to create an object with length, word, and index and sort by length but i'm convinced I can do this via tree generation


QUnit.module('day one');

test('sortUrl returns a list of re-arranged strings by length', assert => {
    const array = ['this', 'cheese', 'is', 'terrible'];
    const arranged = sortUrl(array);
    const expected = ['is', 'this', 'cheese', 'terrible'];

    assert.equal(arranged, expected);
});
test('different word length', assert => {
    const array = ['we', 'eart'];
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
