// In Javascript, values has type, NOT variables
let myVar
console.log(`${myVar} = ${typeof myVar}`)
myVar = 12
console.log(`${myVar} = ${typeof myVar}`)
myVar = 'Hello'
console.log(`${myVar} = ${typeof myVar}`)
myVar = true
console.log(`${myVar} = ${typeof myVar}`)

console.log('----------------------------')

// Type Annotation
function calculateTax(amount: number, format: boolean): string | number {
  const calcAmount = amount * 1.2
  return format ? `$${calcAmount.toFixed(2)}` : calcAmount
}

// The type of taxNumber and taxString IS string | number type. NOT string nor number.
// let taxNumber: string | number = calculateTax(100, false)
// let taxString: string | number = calculateTax(100, true)

// To tell TypeScript compiler to TREAT a VALUE as SPECIFIC TYPE
// USING Type Assertions
let taxNumber = calculateTax(100, false) as number
let taxString = calculateTax(100, true) as string

// can only use the METHODS and PROPERTIES that exist on BOTH 2 types.
console.log(`Number Value: ${taxNumber.toFixed(2)}`)
console.log(`String Value: ${taxString.charAt(0)}`)

// let price = 100
// let taxAmount = calculateTax(price)
// let halfShare = taxAmount / 2

// let personVal = calculateTax('Bob')

// console.log(`Price: ${price}`)
// console.log(`Full amount in tax: ${taxAmount}`)
// console.log(`Half share: ${halfShare}`)
// console.log(`Name: ${personVal}`)

// console.log(`${12} = ${calculateTax(12)}`)
// console.log(`${'Hello'} = ${calculateTax('Hello')}`)
// console.log(`${true} = ${calculateTax(true)}`)
