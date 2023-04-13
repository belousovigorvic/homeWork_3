// homeWork_3 (1)

// create empty array
var list = []
// add 100 numbers
for (let i = 0; i <= 100; i++) {
    list.push(i)
}
for (let i = 0; i < list.length; i++) {
    console.log(list[i] % 3 === 0 ? list[i] = 'fizz' : list[i]) // fizz
    //console.log(list[i] % 5 === 0 ? list[i] = 'buzz' : list[i]) // buzz
    //console.log(list[i] % 3 === 0 && list[i] % 5 === 0 ? list[i] = 'fizzbuzz' : list[i]) //fizzbuzz
}

// homeWork_3 (2)

var milkBeer = ['milk', 'beer', 'beer', 'milk', 'milk']
for (let i = 0; i < milkBeer.length; i++) {
    console.log(milkBeer[i] === 'milk' ? 'good' : 'bad')
}
