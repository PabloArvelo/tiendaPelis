'use strict';

let carrito = []; // carrito de compras que contendrá los artículos   


window.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem("pedido")) || [];
})


let articulo = []; // el ariculo que voy a agregar al carrito
let paquete = [];
let i = 0;
let pagina = 1;
let muestra = "";
let muestra2 = "";
let titulo = "";
let tituloAside = "";
let overview = "";
let precio = "";
let qDef = 1;
let img = "";
let imgAside = "";
let paqueteRecibido = "";
let body = document.body;


let btnCarrito = document.querySelector("#btnAgregaCarrito");
let btnVerCarrito = document.querySelector("#btnMuestraCarrito");
let btnSig = document.querySelector("#siguiente"); // capturo btn sig
let btnAtr = document.querySelector("#atras"); // capturo btn ant
let muestraPelis = document.querySelector("#muestraPelis");
let muestraPelis2 = document.querySelector("#muestraPelis2");

let peliImg = document.getElementById("peli");



let tituloCapture = document.querySelector("#titulo");
let precioCapture = document.querySelector("#precio");
let overViewCapture = document.querySelector("#overView");


// let btnborrar = document.querySelector("deleteCarrito");


showPeli(i, pagina);
showPeliAside(i);

function showPeli(x, p) {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=7fedd3c6c7091d390df27433523017af&language=es-MX&page=`
    let respuesta = "";
    let pagChange = p;

    // `https://api.themoviedb.org/3/movie/popular?api_key=7fedd3c6c7091d390df27433523017af&language=es-MX&page=${pagChange}`
    fetch(`${url}${pagChange}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);

            // aqui muestro los datos de la peli                       

            titulo = data.results[x].title;
            precio = Math.round(data.results[x].id / 1000);
            overview = data.results[x].overview;
            img = data.results[x].backdrop_path;

            body.style.backgroundImage = "url(https://image.tmdb.org/t/p/w500/"+data.results[0].backdrop_path+")";

            tituloCapture.innerHTML = titulo;
            precioCapture.innerHTML = "$ "+precio;
            overViewCapture.innerHTML = overview;           
            
            peliImg.innerHTML = `<img id="imgMain" src="https://image.tmdb.org/t/p/w500/${img}" alt=""></img>`
           
        });

    paquete = [titulo, precio, img];
    return respuesta = paquete;
}

function showPeliAside(a) {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=7fedd3c6c7091d390df27433523017af&language=es-MX&page=`
    let respuesta = "";    

    // `https://api.themoviedb.org/3/movie/popular?api_key=7fedd3c6c7091d390df27433523017af&language=es-MX&page=${pagChange}`
    fetch(`${url}1`)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);

            // aqui muestro los datos de la peli

            for (let m = 0; m < 10; m++) {
                tituloAside = data.results[m].title;
                imgAside = data.results[m].backdrop_path;

                muestra2 += `
            <div id="img">
            <h3>${tituloAside}</h3>            
            <img id="imgAside" src="https://image.tmdb.org/t/p/w500/${imgAside}" alt="">
            </div>
            `
                muestraPelis2.innerHTML = muestra2;
            }           

        });
    paquete = [titulo, precio, img];
    return respuesta = paquete;
}

btnCarrito.addEventListener("click", agregarCarrito);

// //---------------------------------------------------------------

// escucho btn sig y ant y llamo las funciones de incrementa y drecrementa
btnSig.addEventListener('click', incrementa);
btnAtr.addEventListener('click', decrementa);

function incrementa() {
    muestra = "";
    muestra2 = "";
    i++;

    if (i > 19) {
        pagina++
        i = 0;
        // console.log(`pagina ${pagina} `);
        // console.log(`itera ${i} `);
    } else {
        // console.log(`pagina ${pagina} `);
        // console.log(`itera ${i} `);
    }
    showPeli(i, pagina);
}

function decrementa() {
    muestra = "";
    muestra2 = "";

    if (i === 0) {
        if (pagina > 1) {
            pagina--
            i = 19;
        } else {
            i = 0;
            alert("última pagina")
        }
        i = 0;
        // console.log(`pagina ${pagina} `);
        // console.log(`itera ${i} `);
    } else {
        i--
        // console.log(`pagina ${pagina} `);
        // console.log(`itera ${i} `);
    }
    showPeli(i, pagina);
}

// //---------------------------------------------------------------

//creo una clase "articulo pedido" para almacenar el título y el precio 
// para luego agregarlo al carrito.

class artPedido {
    constructor(tit, pre, im, q, subT) {
        this._tit = tit;
        this._pre = pre;
        this._im = im;
        this._q = q;
        this._subT = subT;
    }
}

// agraga el carrito de compras 

function agregarCarrito() {
    muestra = "";
    paqueteRecibido = showPeli(i);

    const nuevoArticulo = new artPedido(paqueteRecibido[0], paqueteRecibido[1], paqueteRecibido[2], qDef, paqueteRecibido[1] * qDef);
    console.log(nuevoArticulo);

    carrito.push(nuevoArticulo);
    console.log(carrito);

    const saveLocalSorage = () => {
        localStorage.setItem('pedido', JSON.stringify(carrito));
    }
    saveLocalSorage();
}

// muestra carrito

function showCarro() {
    location.href = 'carrito.html';
}







            

//         });
//     paquete = [titulo, precio, img];
//     return respuesta = paquete;
// }


// //---------------------------------------------------------------
















