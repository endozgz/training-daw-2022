const assert = require('assert').strict;

function select(array, condition) {
    let result = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (condition(element)) {
            result.push(element)

        }
    }
    return console.log(result)
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]



function pairs(values) {
    return values % 2 === 0
}


function gt15(values) {
    return values > 15
}

function lt10(values) {
    return values < 10
}



// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])