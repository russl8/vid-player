Promise.all([1, 2, 3]).then((res) => console.log(res)); //logs: '[1,2,3]'
Promise.all([1, 2, Promise.resolve(3)]).then((res) => console.log(res)); //logs '[1,2,3]'
Promise.all([1, 2, Promise.reject(3)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); //logs '3'

// const numbers = [3, 56, 2, 48, 5];
// console.log("nums: " + numbers)

// //Map -Create a new array by doing something with each item in an array.
// const numbersMapped = numbers.map(number=>number*2)
// console.log("map: " + numbersMapped)
// //Filter - Create a new array by keeping the items that return true.
// const numbersFiltered = numbers.filter(num=>num<4 ) //only include nums < 4
// console.log("nums<4: " + numbersFiltered)

// //Reduce - Accumulate a value by doing something to each item in an array.
// const sumOfNumDoubled= numbers.reduce((sum,num) => sum+ num*2,0) //foreach number, sum+=num*2
// console.log("reduce: " + sumOfNumDoubled)

// //Find - find the first item that matches from an array.
// const firstNumAbove50 = numbers.find((num)=>num>50)
// console.log("firstNumAbove50: "+ firstNumAbove50 );//1

// //FindIndex - find the index of the first item that matches.
// const indexOfFirstNumAbove50 = numbers.findIndex((num)=>num>50)
// console.log("indexOfFirstNumAbove50: " + indexOfFirstNumAbove50) //1
