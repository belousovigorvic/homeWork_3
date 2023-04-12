//homeWork-3 (1)
var arr = []
//Добавляем 100 чисел в массив
for (var i = 0; i <= 100; i++) {
    arr.push(i)
}
//Условие / 3
for (var a = 0; a < arr.length; a++) {
    if (arr[a] % 3 === 0) {
        console.log(arr[a] = 'Fizz')
    } else {
        console.log(arr[a])
    }
}
//Условие / 5
for (var b = 0; b < arr.length; b++) {
    if (arr[b] % 5 === 0) {
        console.log(arr[b] = 'Buzz')
    } else {
        console.log(arr[b])
    }
}
//Условие / 3 && / 5
for (var c = 0; c < arr.length; c++) {
    if (arr[c] % 3 === 0 && arr[c] % 5 === 0) {
        console.log(arr[c] = 'FizzBuzz')
    } else {
        console.log(arr[c])
    }
}


//homeWork-3 (2)
var milkBeer = ['milk', 'beer', 'beer', 'milk', 'milk']
for (let d = 0; d < milkBeer.length; d++) {
    if (milkBeer[d] === 'milk') {
        console.log('good')
    } else {
        console.log('bad')
    }
}
