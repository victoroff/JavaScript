
// function waitThreeSeconds(){
//     var ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
//     console.log('finished function');
// }
function clickHandler(){
    console.log('click event!');
}

//document.addEventListener('click',clickHandler);

// waitThreeSeconds();
// console.log('finished');



  
// learn how classes work in js
// let matey = new Person();

// matey.name = 'Matey';
// matey.age = 26;
// console.log(matey);



// //default value
// function greet(name){
//     name = name || '<Your name here>'; // checks if name is undefined . If it is it sets the value to the right.
//     console.log('Hello, ' + name);
// }

// <<<<<<< HEAD
// greet(); // => Hello, <Your name here>
// greet('Jonka');// => Hello, Jonka
// =======
// greet();


// class Person extends Human{

// }
// let person = new person();
// >>>>>>> 5d3af4b7ffbc50395e023bfef6b1ff70833feb36


//learning queryselector

//let navElements = document.querySelector('nav');
//console.log(navElements);
//console.log(document.querySelector('#home-btn'));
document.querySelector('#home-btn').onclick = () => {
    window.open('index.html','_self'); // _self to open in the same tab
}

//test classes

// class Animal{
//     constructor(name,age,gender,family){
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.family = family
//     }
// }

// class Lion extends Animal {
    
//     constructor(ruff){
//         super()
//         this.ruff = ruff
//     }
//     static Attack(){
//         cosnole.log('big kitty attacks with paws!!!')
//     }
// }


// let leo = new Lion()


// leo.name = 'leo'
// leo.age = 12
// leo.gender = 'male'
// leo.ruff = 'golden'

// console.log(leo)

//test math
// import {Person} from './modules/person'; // Uncaught SyntaxError: Cannot use import statement outside a module ??????

// let mancho = new Person();

// mancho = {
//     name:'mancho',
//     age:23
// }
// console.log(macho);
function random(number) {
    return Math.floor(Math.random() * (number+1));// math.random returns float number
  }
//console.log(Math.sqrt(64))
document.addEventListener('click',colorBtnHandler);
function colorBtnHandler(){
    const header = document.querySelector('header');
    let rndColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    header.style.backgroundColor = rndColor;
}


function updatePlayerName(){
    const player = document.getElementById('player');
    let name = prompt('Enter player name!');
    player.textContent = 'Player : ' + name;
}

// console.log prints 68 and returns undefined => undefined || false || 4 => 4 
//var a = console.log((false && !true) || 68) || false || 4;

// fns are objects. all object return 


let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
    }, 250) 
  }) 
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage) 
  });

let mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("something went wrong");
    }, 550);
});



mySecondPromise.then((errorMsg) => {
    console.log('Ops!' + errorMsg);
});