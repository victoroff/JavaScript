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



//default 
function greet(name){
    name = name || '<Your name here>';
    console.log('Hello, ' + name);
}

greet();