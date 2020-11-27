### Shape type 

* You can easily defined the shape type for an object by defining type for each property
* Can including methods in shape type as well 
* Can using Type aliases for Shape Types 
```Javascript
type Product {
  name: string,
  price?: number, // optional property
  hasFeature?(Feature): boolean // optional method
}
```

## Excess properties

* You can't declare excess properties if you already use the *type annotation* for that object 
* To able to define excess properties, you have to enable *suppressExcessPropertyErrors* to true
