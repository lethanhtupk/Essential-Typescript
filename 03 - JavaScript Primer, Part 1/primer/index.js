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

// Understanding "this" keyword
console.log('----------------------')
let hat = {
  name: 'Hat',
  _price: 100,
  priceIncTax: 100 * 1.2,

  set price(newPrice) {
    this._price = newPrice
    this.priceIncTax = this.price * 1.2
  },

  get price() {
    return this._price
  },

  writeDetails: () => console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
}

let boots = {
  name: 'Boots',
  price: 100,

  get priceIncTax() {
    return Number(this.price) * 1.2
  }
}

hat.writeDetails()
hat.price = 120
hat.writeDetails()

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`)
boots.price = 120
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`)

console.log('--------------------------------------')
// Understanding "this" keyword in stand-alone function
function writeMessage(message) {
  console.log(`${this.greeting}, ${message}`)
}

// value assigned name without let, const or var keyword are assigned with global object.
greeting = 'Hello'
writeMessage('It is a sunny today')

console.log('--------------------------------------')
// Understanding "this" in methods
// when a function is invoked as an object's method, this is set to the object
let myObj = {
  greeting: 'Hi, there',

  writeMessage(message) {
    console.log(`${this.greeting}, ${message}`)
  }
}

greeting = 'Hello'
myObj.writeMessage('It is sunny today')
