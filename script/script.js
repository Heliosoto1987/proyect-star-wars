'use strict'
const menu1 = document.querySelector('.menu1');
const reciver = document.querySelector('.reciver');
const menutwo = document.querySelector('.menu2');
let dataArray = [];
const arrayphotos = [
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6J_pKBuVvAx5Xl70xQsFmGYyw3_L9cqqGQ&usqp=CAU'], 

    ['http://2.bp.blogspot.com/-jP2rNAhUPSI/VNrIfnz6hMI/AAAAAAAASMA/iV_euzBDuVM/s1600/C3PO-16.JPG'],

    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7_BNCZFnL8G_f8924O_cLC76LXbLv0vqVg&usqp=CAU'],

    ['https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg'],

    ['https://i.pinimg.com/originals/af/0b/5c/af0b5cd96c2ada2c843864c49179764f.jpg'],

    ['http://pm1.narvii.com/6955/8de3ebe4060f25b47bb284ef0708886144d46dd8r1-377-382v2_00.jpg'],

    ['https://pm1.narvii.com/6168/ff4e27ef435e7191ca5429126c31754115a93776_00.jpg'],

    ['https://www.lacitedesnuages.be/38152-home_default/star-wars-artfx-r5-d4-celebration-exclusive-pvc-statue-10-cm.jpg'],

    ['https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780'],
    
    ['https://ca-times.brightspotcdn.com/dims4/default/d435f74/2147483647/strip/true/crop/1263x720+0+0/resize/1263x720!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F57%2F32%2F9f488c2d4bc288bcfce63e749811%2Fobi-wan.JPG']
];

    function api() {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
        dataArray = data.results
        return dataArray
    })
}
    function menu(array, menu) {
        menu.classList.toggle('lol')
        for (let index = 0; index < array.length; index++) {
            if(menu.classList.contains('lol')){
            menu.innerHTML += `<span class="menu1__span">${array[index].name}</span>`     
            }else{
            menu.innerHTML = 'Personajes'
            } 
        }
    }

    function menu2(menu) {
        menu.classList.toggle('lol')
            if(menu.classList.contains('lol')){
            menu.innerHTML += `<span class="menu2__span">Lord Venao</span>` + '<span class="menu2__span">Perfect Jedi</span>' + '<span class="menu2__span">Momy Joda</span>' + '<span class="menu2__span">Dark senior</span>' + '<span class="menu2__span">Padawan</span>' +'<span class="menu2__span">Er papa de los Helados</span>'
            }else{
            menu.innerHTML = 'Divertidos'
            } 
    }

    function activate(event) {
        const select = event.target.innerHTML;
        for (let index = 0; index < dataArray.length; index++) {
            if (select === dataArray[index].name) {
                reciver.innerHTML = `<div class="name">Nombre: ${dataArray[index].name}</div>` + `<div class="height">Altura: ${dataArray[index].height}</div>` + `<div class="mass">Peso: ${dataArray[index].mass}</div>` + `<div class="img"><img class="img__inside" src="${arrayphotos[index]}" alt="Disculpe a ocurrido un error"></div>`;
            }else if(select === 'Personajes') {
            reciver.innerHTML = ''
            }
        }
    }

    function activate2(event) {
        const select = event.target.innerHTML;
            if (select === 'Lord Venao') {
                reciver.innerHTML = `<div class="name">Nombre: Lord Venao</div>` + `<div class="height">Altura: 1.69</div>` + `<div class="mass">Peso: Un verguero</div>` + `<div class="img"><img class="img__inside" src="img/papa123.jpg" alt="Disculpe ha ocurrido un error"></div>` + `<div class="reciver__text">Este terrible Jedi es un peligro para las reservas de azucar en el mundo</div>`;
            }else if (select === 'Momy Joda') {
                reciver.innerHTML = `<div class="name">Nombre: Momy Joda</div>` + `<div class="height">Altura: 1.60</div>` + `<div class="mass">Peso: 43Kg?xD</div>` + `<div class="img"><img class="img__inside" src="img/momy.jpg" alt="Disculpe ha ocurrido un error"></div>` + `<div class="reciver__text">Maestra jedi, la mas hermosa de todas</div>`;
            }else if (select === 'Padawan') {
                reciver.innerHTML = `<div class="name">Nombre: Hermano querido</div>` + `<div class="height">Altura: 1.75</div>` + `<div class="mass">Peso: No sale de 75Kg</div>` + `<div class="img"><img class="img__inside" src="img/padawan.jpg" alt="Disculpe ha ocurrido un error"></div>` + `<div class="reciver__text">Esta mas rezagao que el Huesca</div>`;
            }else if (select === 'Dark senior') {
                reciver.innerHTML = `<div class="name">Nombre: Dark Senior</div>` + `<div class="height">Altura: 2.03</div>` + `<div class="mass">Peso: 145Kg</div>` + `<div class="img"><img class="img__inside" src="img/ale.jpg" alt="Disculpe ha ocurrido un error"></div>` + `<div class="reciver__text">Pontente Senior Front End... no te pido mucho pero... DAME TRABAJO :D</div>`;
            }else if (select === 'Perfect Jedi') {
                reciver.innerHTML = `<div class="name">Nombre: Jedi Perfecta</div>` + `<div class="height">Altura: 1.72</div>` + `<div class="mass">Peso: 42</div>` + `<div class="img"><img class="img__inside" src="img/neidy.jpg" alt="Disculpe ha ocurrido un error"></div>` + `<div class="reciver__text">Estos datos han sido manipulados ALERT!!!</div>`;
            }else if (select === 'Er papa de los Helados') {
                reciver.innerHTML = `<div class="name">Nombre: Vergatarius Jedi Master</div>` + `<div class="height">Altura: 2.15</div>` + `<div class="mass">Peso: 90Kg</div>` + `<div class="img"><img class="img__inside" src="img/helio.jpg" alt="Disculpe ha ocurrido un error"></div>` + `<div class="reciver__text">Este es el campeon de la galaxia si lo ves corre mi hermano</div>`;
            }else if(select === 'Divertidos') {
            reciver.innerHTML = ''
            }
    }
    
    function callbacks() {
        api()
        menu(dataArray, menu1)
    }

    function callbacks2() {
        menu2(menutwo)
    }

menu1.addEventListener('click', callbacks);
menu1.addEventListener('click', activate);
menutwo.addEventListener('click', callbacks2);
menutwo.addEventListener('click', activate2);



