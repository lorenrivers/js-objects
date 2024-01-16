console.log("Hello world!");

const person = {
  name: "Loren",
  age: 29,
  favouriteColour: "orange",
};

console.log(person);
console.table(person);

const car = {
  make: "Volkswagen",
  model: "Golf",
  colour: "black",
};

console.log(
  "FOR SALE: " +
    car.make +
    " " +
    car.model +
    ". The colour is " +
    car.colour +
    ". Message if interested."
);

const book = {
  title: "The Testaments",
  author: "Margaret Atwood",
  noOfPages: 500,
};

console.log(
  book.title +
    " by " +
    book.author +
    " is the amazing follow up to the bestselling The Handmaid's Tale. The book is " +
    book.noOfPages +
    " pages long."
);
