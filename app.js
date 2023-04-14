// homeWork_3 (1)

// create empty array
var list = []
// add 100 numbers
for (let i = 0; i <= 100; i++) {
    list.push(i)
}

for (var i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
        console.log('FizzBuzz');
    } else if (list[i] % 3 === 0) {
        console.log('Fizz');
    } else if (list[i] % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(list[i]);
    }
}

//homeWork_3 (2)

var milkBeer = ['milk', 'beer', 'beer', 'milk', 'milk']
var resultList = []
for (let i = 0; i < milkBeer.length; i++) {
    if (milkBeer[i] === 'milk') {
        resultList.push('good')
    } else {
        resultList.push('bad')
    }
}
console.log(resultList)
