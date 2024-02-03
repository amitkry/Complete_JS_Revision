//1--> Create a variable of type string and try to add a number to it
let str = "Amit";
let add = str + 3;
console.log(add)

//output :- Amit3

//2--> Use type of operator to find the datatype of the string in last question
let str1 ="Amit";
let add1 = str + 3;
console.log(typeof(add))

//3--> Create a const object in js can you change it to hold a number later
// Creating a const object
const myObject = {
    key: "value"
  };
  
  // Modifying a property of the object
  myObject.key = 42;
  
  // Displaying the modified object
  console.log(myObject); // Outputs: { key: 42 }

  
  //4--> Try to add new key in the previous const object will you be able to do so?
  
  /*
  Yes, you can add a new key to a constant (const) object in JavaScript. The `const` keyword prevents the reassignment of the variable itself, but it does not prevent modifications to the object's properties.

Here's an example:
*/
// Creating a const object
const myObject = {
  key: "value"
};

// Adding a new key to the object
myObject.newKey = "new value";

// Displaying the modified object
console.log(myObject); // Outputs: { key: "value", newKey: "new value" }

/*

In this example, we added a new key (`newKey`) to the `myObject` constant. This is possible because the `const` declaration only prevents the variable `myObject` from being reassigned, not the modification of its properties.

*/


// 5--> Write a Js Program to create a dictionary of 5 words

// Creating a dictionary of 5 words
const wordDictionary = {
    apple: 'a round fruit with red or green skin and a whitish interior',
    banana: 'an elongated, edible fruit with a yellow skin and a soft, sweet flesh',
    cat: 'a small domesticated carnivorous mammal',
    sun: 'the star around which the Earth orbits, providing light and heat',
    computer: 'an electronic device for storing and processing data'
  };
  
  // Displaying the dictionary
  console.log(wordDictionary);
  
  // Accessing a specific word definition
  console.log('Definition of "apple":', wordDictionary.apple);
  