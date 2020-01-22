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

greet(); // => Hello, <Your name here>
greet('Jonka');// => Hello, Jonka