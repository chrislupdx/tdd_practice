const test = QUnit.test;

// function sortUrl(array) {
//     const arrayitemlengths = array.map(number => {
//         return number.length;
//     });
//     return arrayitemlengths;
// }

function sortUrl(array) {
    //iterate through the array and play war with the next value with the previous
    //move through the array and compare the value of string to array[position of next]
    const maprearranged = array.map(string => {
        const nextNumber = array.indexOf(string);
        const nextLength = array[nextNumber].length;
        if(string.length > nextLength) {
            //if stirng.length is bigger than the next, put it ahead of nextlent
            // can I manipulate the ordinal position of an item an an array?
            //map returns a new array with the original values: I don't want that here, I want to pull it apart by the arry, but not have it come back differently.
        }
    });

    const rearranged = array.forEach(string => {
        const newArray = [];
        const nextNumber = array.indexOf(string + 1);
        const nextLength = array[nextNumber].length;
        // && array.indexOf(string) == 0
        // eslint-disable-next-line eqeqeq
        if(string.length > nextLength) {
            //push/pop/slice string to newArray 
            //if the current string is longer than the next one, pop it onto newArray
            newArray;

        } 

        console.log(newArray);
        console.log(nextNumber);
        return newArray;
    });

    console.log('hi');
    return rearranged;
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
