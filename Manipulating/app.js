var ll = document.getElementsByTagName("p")
for (let para of ll) {
     console.log(para.children)   
}

let allImg = document.getElementsByTagName("img")
// for (let im of allImg) {
//     try {
//         console.log(im.src)   
//     } catch {
//         im.src = "file:///C:/Users/arya2/Documents/Webd/Manipulating/index.html"
//     } 
// }

// for (var ima of allImg) {
//     ima.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
//     console.log(ima.src)  
// }

// let alima = document.getElementsByClassName("square")
// for (let i of alima) {
// }

let que = document.querySelector("#banner")
let qu = document.querySelectorAll("a")
let q = document.querySelector("a[title = 'Java']") //like css
console.log(q)
for (var i of qu) {
    console.log(i.href)
}

//document.querySelector('p').innerText = "hacked"
//document.querySelector("#banner").id = "toc"

//attribute
// let y = document.querySelector('a')
// undefined
// y.href
// 'file:///C:/wiki/List_of_chicken_breeds'
//     y.getAttribute("href")
// '/wiki/List_of_chicken_breeds'
let y = document.querySelector('a')
y.setAttribute("href", "https://www.google.com")

window.getComputedStyle(y).fontSize;


let h2 = document.querySelector('h2')
h2.classList.add("purple")
h2.classList.add("border")
h2.classList.toggle("purple")//adds or remove elemen

//window.getComputedStyle(y).fontSize;
let h3 = document.createElement("h3");
h3.innerText = "qwertyuiop"
h3.classList.add("purple")
document.body.appendChild(h3)

let para = document.querySelector("p");
para.append("appended afterword")

let first = document.createElement('b')
first.append("prepended")
para.prepend(first);


let hist = document.querySelector("li")
hist.remove()//