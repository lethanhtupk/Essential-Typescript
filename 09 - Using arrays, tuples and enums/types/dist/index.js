function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
// let hat: [string, number] = ["Hat", 100];
// let gloves: [string, number] = ["Gloves", 75]
// let products: [string, number][] = [["Hat", 100], ["Gloves", 75]]
// let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products]
// tupleUnion.forEach((elem: [string, number] | boolean) => {
//   if (elem instanceof Array) {
//     elem.forEach((tupleElem: string | number) => {
//       if (typeof tupleElem === "string") {
//         console.log(`String value: ${tupleElem}`)
//       } else {
//         console.log(`Number value: ${tupleElem}`)
//       }
//     })
//   } else if (typeof elem === "boolean") {
//     console.log(`Boolean value: ${elem}`)
//   }
// })
// writePrice(hat[0], hat[1])
// writePrice(gloves[0], gloves[1])
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
let products = [[Product.Hat, 100], [Product.Gloves, 75]];
products.forEach((prod) => {
    switch (prod[0]) {
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;
    }
});
