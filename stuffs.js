let counter = function(arr){
    return 'There are ' + arr.length + ' in this element'
    // console.log(`There are ${arr.length} in the array`)
}

let adder = function(a,b){
    return `sum of the two input values is: ${a+b}`
}

let pi = 3.17

module.exports = {
    counter:counter,
    adder: adder,
    pi: pi
}