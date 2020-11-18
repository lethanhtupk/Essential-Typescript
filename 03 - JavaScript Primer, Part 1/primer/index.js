let hatPrice = 100
console.log(`Hat price: ${hatPrice}$`)
let bootsPrice = '100'
console.log(`Boots price: ${bootsPrice}$`)
if (hatPrice == bootsPrice) {
  console.log('Prices are the same')
} else {
  console.log('Prices are different')
}

let totalPrice = hatPrice + bootsPrice
console.log(`Total Price: ${totalPrice}`)

let myvariable = 'Adam'
console.log(`Type: ${typeof myvariable}`)
myvariable = 100
console.log(`Type: ${typeof myvariable}`)

let firstCity
// if firstCity is null or undefined, then the secondCity will fallback to "Hanoi"
let secondCity = firstCity || 'Hanoi'
console.log(`City: ${secondCity}`)

// the type of result of function is determine by arguments
function sumPrices(first, second, third) {
  return first + second + third
}

totalPrice = sumPrices(hatPrice + bootsPrice)
console.log(`Total: ${totalPrice} ${typeof totalPrice}`)
totalPrice = sumPrices(100, 200, 300)
console.log(`Total: ${totalPrice} ${typeof totalPrice}`)
totalPrice = sumPrices(100, 200)
console.log(`Total: ${totalPrice} ${typeof totalPrice}`)

// UNDERSTANDING "THIS" IN METHOD
// when a function is invoked as an object's method. "this" is set to the object
let myObject = {
  greeting: 'Hi, there',

  writeMessage(message) {
    console.log(`${this.greeting}, ${message}`)
  }
}

greeting = 'Hello'
myObject.writeMessage("It's sunny today")

// if the function is accessed outside of this project, the "this" will be set differently
// it can happen when the function is assigned to a variable

let myFunction = myObject.writeMessage
myFunction('It is sunny day')
