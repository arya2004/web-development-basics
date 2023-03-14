console.log("worked");
let a = "19" + 1;
console.log(a)
let  b = Math.random();
console.log(b);
if (b >= 0.5) {
    console.log("big")
}
else if (b >= 0.3) {
    console.log("mid")
}
else{
    console.log("low")
}

let arr = ["1234",2,3,4,5,6,7,8];
console.log(arr[0]);
console.log(arr[0].length);

const dict = {
    name: "azzon",
    upVote: 13,
    isPremiumUser: true
}

console.log(dict.name);
const product = {
    name : "Gummy Bears",
    inStock : true,
    price : 1.99,
    flavors : ["grape", "apple", "cherry"]
}
console.log(product.inStock);
product.test = -1;
console.log(product);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
   
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (var i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}
while (condition) {
    
}
