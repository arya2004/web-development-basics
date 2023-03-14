console.log("succjhess")
function a(e,r){
    return e + r;
}
console.log(a(2,3)); 

function rant1(message) {
    console.log(message.toUpperCase())

}
rant1('I hate bees');
function lastElement(a){
    if (a.length === 0) {
        return null
    }
    return a[a.length-1]
}
function capitalize(s){
    a = s[0];
    a = a.toUpperCase();
    a = a + s.slice(1)
    return a;
}
function sumArray(a){
    let aa = 0;
    for (var i = 0; i < a.length; i++) {
        aa = aa + a[i];
    }
    return aa;
}
const square1 = function(x){
    return x * x;
}

let square = {
    area(side){
        return side * side;
    },
    perimeter(side){
        return side * 4;
    }
}

let hen = {
    name : "Helen",
    eggCount : 0,
    layAnEgg(){
        this.eggCount += 1;
        return "EGG";
    }
}
console.log(capitalize("egglpanr"))

let pp = [1,2,3,4,5,,6,7,8,9,10]
function p(n){
    console.log(n)
}
pp.forEach(p)


let num = [1,2,3,4,5,6,7,8,9,10]
let sqr = num.map(function(y){
    return y*y
})
//map is used to create array from given array
console.log(num);
console.log(sqr)


const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

let firstNames = fullNames.map(function(u){
    return u.first;
})

const cub = (x) =>{
    return x*x*x;
}
const greet = (person) =>{
    return (`Hey ${person}!`)
}

const sub = (a,b) => a-b

//setTimeout(() => console.log("qwe"), 3000)//delays function by 3000ms. anon function is important for timeout
console.log("qweR")

const validUserNames = function (eachNames){
    return eachNames.filter(i => i.length < 10);
};

const exam = [700,87,89,93,83,93,84,100]
let loss = exam.every(score => score >=exam[0]) //returns true. like AND
let tops = exam.some(score => score === 100) //returns true. like AND


//big func ahead===============================================================================================================
console.log("skjb")
let a = prompt("choose");
const todo = ["study", "angualr"]
while (a !== 'quit' ) {
    a = prompt("choose");
    if (a === "list") {
        console.log("***********");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} : ${todo[i]} `);
        }
        console.log("***********");
    }
    else if (a === "new") {
        const newTodo = prompt("what is new rem");
        todo.push(newTodo);
        console.log("added");
    }
    else if (a === "delete") {
        const deleteTodo = prompt("what is index to dlete");
        todo =  todo.splice(deleteTodo,1)

        console.log("deleted");
    }
}
console.log("quit success");



