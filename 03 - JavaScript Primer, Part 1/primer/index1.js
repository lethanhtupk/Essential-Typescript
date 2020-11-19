// When an object is created using the literal syntax, it's prototype is Object
// Which is a built-in object provide by JavaScript and provides some basic features.
// Eg. toString() method in example.

let hat = {
  name: 'hat',
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2
  }
}

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`)
console.log(`toString: ${hat.toString()}`)

let boots = {
  name: 'Boots',
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2
  }
}

let hatProtoType = Object.getPrototypeOf(hat)
console.log(`Hat Prototype: ${hatProtoType}`)

let bootsPrototype = Object.getPrototypeOf(boots)
console.log(`Boots Prototype: ${bootsPrototype}`)
console.log(`Common prototype: ${hatProtoType === bootsPrototype}`)
