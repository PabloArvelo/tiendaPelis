'use strict';

let divCarrito = document.querySelector("#carrito");
let total = document.querySelector("#totalPrecio");
let carritoView = JSON.parse(localStorage.getItem("pedido")) || [];
let carritoShow = "";
// let carritoTotalCompra = "";
let sumaQ = "";
let restaQ = "";
let i = 0;
let cantxItems = "";
let subTotItems = 0;
let precio = 0;
let compraTotal = 0;

show();  // llamo para ejecutarla desde entrada
// calcSubItems();



function show() {
    for (i = 0; i < carritoView.length; i++) {

        carritoShow += `
             <div id="${i}" class="carritoItemContainer">

                <div class="carritoItemContainer">

                <div class="litImage">
                <img  class="carritoItemImg" src="https://image.tmdb.org/t/p/w200/${carritoView[i]._im}" alt="">                
                </div>                    
                    <div class="anchoTitulo">
                    <p class="carritoItemTitulo itemElement">${carritoView[i]._tit}</p>
                    </div>

                    <p class="carritoItemPrecio itemElement"> $ ${carritoView[i]._pre}</p>  

                    
                    <input  class="itemElement" id="cxi" type="number"  value="${carritoView[i]._q}"  style="width: 30px;">
                    
                    <div class="controlCantidad itemElement">
                    <button name="${i}" class="mas"  onclick="incrementaQItem(this.name)">+</button>
                    <button name="${i}" class="menos" onclick="decrementaQItem(this.name)">-</button>
                    </div>                             

                    <p class="carritoItemPrecio itemElement">$${carritoView[i]._subT} </p>                 
                
                    <button class="btnDelete" name="${i}" class="carritoItemBorrar" onclick="borrarProducto(this.name)">
                    <img class="tacho" src="img/cesto.png"></img>
                    </button>

                </div>                
             
             </div>    
             </br>                
     `;        

        divCarrito.innerHTML = carritoShow;
    }

    for (let j = 0; j < carritoView.length; j++) {
        compraTotal = compraTotal+carritoView[j]._subT;
    }       

    total.innerHTML = "$ "+compraTotal;  
    compraTotal = 0;

}
let cant = 1;


function incrementaQItem(x) {

    carritoShow = "";
    divCarrito.innerHTML = "";

    let cambiaCant = carritoView[x];

    cambiaCant._q++  // lo que incremento es el valor guardado en el LS
    // si incremento la variable "cant", cuando cambio q
    // en otro itel del carrito, incrementa desde lo que va guardando "cant"


    cambiaCant._subT = carritoView[x]._pre * cambiaCant._q;

    carritoView.splice(x, 1, cambiaCant);

    saveNewLocalSorage();
    show();

}

function decrementaQItem(x) {
    if (carritoView[x]._q === 1) {

    } else {
        carritoShow = "";
        divCarrito.innerHTML = "";
        let cambiaCant = carritoView[x];
        cambiaCant._q--
        cambiaCant._subT = carritoView[x]._pre * cambiaCant._q;
        carritoView.splice(x, 1, cambiaCant);
        saveNewLocalSorage();
        show();
    }

}

function home() {
    location.href = 'index.html';
}

function borrarProducto(x) {
    carritoShow = "";
    divCarrito.innerHTML = "";
    console.log(x);

    carritoView.splice(x, 1)
    saveNewLocalSorage();
    show();
}

const saveNewLocalSorage = () => {
    localStorage.setItem('pedido', JSON.stringify(carritoView));
}

console.log(carritoView);