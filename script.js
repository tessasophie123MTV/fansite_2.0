let MyBox1 =document.querySelector("#MyBox1");
let mybox2 =document.querySelector("#mybox2");

let tekst =document.querySelector("#tekst");
let enterr =document.querySelector("#enterr");

enterr.addEventListener("click", myfunc1);


function myfunc1() {
    const command = tekst.value.trim().toLowerCase();
    if (command === 'licht uit') {
        MyBox1.style.backgroundImage = "url(img/pic_bulboff.gif)";
    } else if (command === 'licht aan') {
        MyBox1.style.backgroundImage = "url(img/pic_bulbon.gif)";
    }

} 

function myfunc2() {
    const btn = document.getElementById('myButton');
    if (btn.textContent === 'Click me') {
        btn.textContent = 'You clicked me!';
    } else  {
        btn.textContent = 'Click me';
    }
}

document.getElementById('myButton').addEventListener('click', myfunc2);