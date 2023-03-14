function newColor(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}
//this is way to create func, 'cause Js
//anon func behaves differently here
newColor.prototype.rgb = function () {
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`
}
newColor.prototype.rgba = function (a = 1.0) {
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
}

let col1 = new newColor(40,255,60);
let col2 = new newColor(0,0,0);

//with oops
class classColor{
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.colName = name 
    }
    greet(){
        return `hello, i am ${this.colName}`
    }
    innerRGB(){
        return `${this.r},${this.g},${this.b}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})` //call another methid from method
    }
    rgba(a = 1.0){
        return `rgba(${this.innerRGB()},${a})`;
    }
}

let c1 = new classColor(245,264,0,"pink")
let c2 = new classColor(25,64,220,"blue")


class Pet{
    constructor(name,breed,age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    eat(){
        return `${this.name} is eatin`;
    }
}


class Cat extends Pet{

    purr(){
        return `${this.name} says purrrr`;
    }
}
class Dog extends Pet{

    bark(){
        return `${this.name} says whoof`;
    }
}

let d1 = new Dog('wwww', 'qwert', 20)

let x =2;
let y =1;
let z =0;
if (x==y==z) {
    console.log("hello")
} else {
    console.log("world")
}