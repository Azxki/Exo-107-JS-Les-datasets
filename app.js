// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');



let age = p1.dataset.age;
p1.innerHTML += " : " + age;

let chaine = p2.dataset.chaine;
p2.innerHTML += " : " + chaine;

let array = p3.dataset.array;
p3.innerHTML += " : " + array;

let bol = p4.dataset.bol;
p4.innerHTML += " : " + bol;

chaine = chaine + chaine.length;
p2.innerHTML += " : " + chaine;

if (bol === true) {
    p4.innerHTML = "La valeur est vraie";
}
else {
    p4.innerHTML= "La valeur est fausse";
}


let para1 = p5.dataset.age = '42';
p5.innerHTML += para1;

let para2 = p6.dataset.chaine = 'Hello';
p6.innerHTML += para2;

let para3 = p7.dataset.array = 'pomme, poire, orange';
p7.innerHTML += para3;

let para4 = p8.dataset.bol = 'true';
p8.innerHTML += para4;

para2 = chaine + chaine.length;
p6.innerHTML += " : " + chaine;

if (para4 === true) {
    p8.innerHTML = "La valeur est vraie";
}
else {
    p8.innerHTML= "La valeur est fausse";
}