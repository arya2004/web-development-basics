const btn = document.querySelector("#v2")
btn.onclick = function(){
    console.log("clicked yaay")

}

function scream(){
    alert("dont hover")
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function(){
    alert("good")
}

let click = document.querySelector(".even")
click.addEventListener("click", () => {
    alert("event listned")
} )

let clic = document.querySelector(".even1")
clic.addEventListener("dblclick", () => {
    alert("dbl klick")
} )
//first a string for event, second a function ot pass. se MDN doc

let two = document.querySelector(".even2")
two.addEventListener("click", () => {
    console.log("clicked yaay")
} )
two.addEventListener("click", () => console.log("yaaaaaaaaay"))
//can add 2 simultaneously

let col = document.querySelector("#col");
let title = document.querySelector(".ehone")

function neu(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
   

    return `rgb(${r}, ${g}, ${b})`;
}

col.addEventListener("click",()=>{
      
   document.body.style.backgroundColor = neu();
    title.innerText = neu(); //innerHTML also works
})

let colo = document.querySelector("#colo");
colo.addEventListener("click",()=>{
      
    colo.style.backgroundColor = neu();
     colo.style.color = neu(); 
 })
 

let input = document.querySelector("input");
input.addEventListener("keypress",(e)=>{
    console.log(e.key);
    console.log(e.code);
})   

// window.addEventListener("keypress", (e) => {
//     console.log(e.code);
// })
//PRINTS when key is pressed globall

// let frm = document.querySelector("#qwer");
// let imput = document.querySelector("#dome");
// frm.addEventListener("submit", (e) => {
//     e.preventDefault();
//    // let inn = console.log(imput.value);
//     let newhed = document.createElement("h2")
//     newhed.innerText = inn;
//     document.h2.appendChild(newhed)
// })

let post = document.querySelector("#post");
let cont = document.querySelector('#subReddit')
post.addEventListener('submit', (e)=>{
    e.preventDefault();
    let userName = document.querySelector('#user').value;
    let vue = document.querySelector('#postt').value;
    newPost(userName,vue);
    document.querySelector('#postt').value = "";
    document.querySelector('#user').value = "";
    document.querySelector('#postt').placeholder = "vue";
    document.querySelector('#user').placeholder = "username";
})

let newPost = (userName,vue) =>{
    let newer = document.createElement('li');
    newer.append(userName)
    newer.append(`   says ${vue}`);
 cont.append(newer)

}

//break
const form = document.querySelector('#gross');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');
 
const groceryList = document.querySelector('#list');
 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newList = document.createElement('li');
    newList.innerHTML = `${quantity.value} ${product.value}`;
    groceryList.appendChild(newList);
    quantity.value = "";
    product.value = "";
})

//callback
setTimeout(() => {
    document.body.style.backgroundColor = 'violet';
    setTimeout(() => {
        document.body.style.backgroundColor = 'indigo';
    }, 1000);
}, 1000);