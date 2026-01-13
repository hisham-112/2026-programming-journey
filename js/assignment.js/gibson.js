
// function capitalizeWords(sentence) {
//   alert(sentence);

//   let result = sentence
//       .split(" ") // break into words
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter
//       .join(" "); // join them back together

//   return result;
// }

// capitalizeWords("hello hisham");




// const numbers1 = [4, 5, 6];

// const numbers2 = numbers1
// .map(value => value * 2)
// .filter(value => value % 2 === 0);

// console.log(numbers2); // [8, 10, 12] 
//                        // [4,6]





// const user = {
//   id: 1,
//   profile: {
//     username: "mandem",
//     email: "mandem@example.com"
//   },
//   settings: {
//     theme: "dark",
//     notifications: true
//   }
// };

// function printUserInfo({ profile: { username, email }, settings: { theme } }) {
//   console.log("Username:", username);
//   console.log("Email:", email);
//   console.log("Theme:", theme);
// }

// printUserInfo(user);







// const getAffordableProducts = (products, budget) => {
   
//   const affordable = products.filter(product => product.price <= budget );

//    console.log(affordable);

// };
// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 600 },
//   ];

// getAffordableProducts(products,800);





// function applyOperation(arr, operation) {
//   return arr.map(num => {
//     if (operation === "square") {
//       return num * num;
//     } else if (operation === "double") {
//       return num * 2;
//     } else if (operation=== "negate") {
//       return -num;
//     } else {
//       throw new Error("Unknown operation: " + operation);
//     }
//   });
// }
// console.log(applyOperation([1, 2, 3], "square"));
// console.log(applyOperation([1, 2, 3], "double"));
// console.log(applyOperation([1, 2, 3], "negate"));




// function groupByCategory(items) {
//   return items.reduce((result, item) => {
//     // If the category doesn't exist yet, create it
//     if (!result[item.category]) {
//       result[item.category] = [];
//     }

//     result[item.category].push(item.name);

//     return result;
//   }, {});
// }

// const items = [
//   { name: "apple", category: "fruit" },
//   { name: "carrot", category: "vegetable" },
//   { name: "banana", category: "fruit" }
// ];

// console.log(groupByCategory(items));



// function getUserCity(user) {
//   return user?.adress?.city ??"unknown";  
// }

// const user1 = {name: "John", address: {city: "Lagos" } };
// const user2 = {name: "Mary"};

// console.log(getUserCity(user1));
// console.log(getUserCity(user2));










