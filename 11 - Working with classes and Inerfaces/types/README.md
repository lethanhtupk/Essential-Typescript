## Access Control Keywords

* Typescript supported keywords to manage access object's properties which Javascript don't 
* List keywords are supported: 
  1. public 
  2. private 
  3. protected 
  
  Typescipt treats properties as *public* by default when no keyword is used

## Defining Read-only Properties 

* The *readonly* keyword can be used to create instance properties whose value 
is assigned by the constructor and cannot otherwise be changed

## Interfaces

* interfaces have the same purpose with classes.
* defining an interface by using *interface* keyword and have to contain the set of properties and methods
* You have to implement methods of interface by using *implement* keyword 
* can *implement* multiple interface 
* an interface can be extend using *extends* keyword 


## Defining optional interface properties and methods 

```Javascript 
interface Person {
  name: string;
  getDetails(): string;
  
  dogName?: string;
  getDogDetails?(): string;
}
```