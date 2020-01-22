function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}
function clickHandler(){
    console.log('click event!');
}

document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished');



//default value
function greet(name){
    name = name || '<Your name here>'; // checks if name is undefined . If it is it sets the value to the right.
    console.log('Hello, ' + name);
}

// <<<<<<< HEAD
// greet(); // => Hello, <Your name here>
// greet('Jonka');// => Hello, Jonka
// =======
// greet();


// class Person extends Human{

// }
// let person = new person();
// >>>>>>> 5d3af4b7ffbc50395e023bfef6b1ff70833feb36
