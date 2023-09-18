'use strict';

let carritoShow = "";
let divCarrito = document.querySelector("#carrito");
let sumaQ = "";
let restaQ = "";
let i = 0;
let cantxItems = "";
let subTotItems = 0;
let precio = 0;
let cant = 1;
console.log(cant);

let carritoView = JSON.parse(localStorage.getItem("pedido")) || [];

show();  // llamo para ejecutarla desde entrada
calcSubItems();



function show() {
    for (i = 0; i < carritoView.length; i++) {
        precio = carritoView[i]._pre;

        carritoShow += `
             <div id="${i}" class="carritoItemContainer">

                <div class="carritoItemContainer">

                    <img  class="carritoItemImg itemElement" src="https://image.tmdb.org/t/p/w200/${carritoView[i]._im}" alt="">
                    <p class="carritoItemTitulo itemElement">${carritoView[i]._tit}</p>
                    <p class="carritoItemPrecio itemElement"> $ ${precio}</p>  

                    
                    <input  class="itemElement" id="cxi" type="number"  value="1"  style="width: 30px;">
                    
                    <div class="controlCantidad itemElement">
                    <span name="${i}" class="mas"  onclick="incrementaQItem(this.name)">+</span>
                    <span name="${i}" class="menos" onclick="decrementaQItem(this.name)">-</span>
                    </div>                             

                    <p class="carritoItemPrecio itemElement">$${calcSubItems(cant,precio)} </p>                 
                
                    <button class="itemElement" name="${i}" class="carritoItemBorrar" onclick="borrarProducto(this.name)">quitar</button>

                </div>                
             
             </div>                
            
     `;     

        divCarrito.innerHTML = carritoShow;
        calcSubItems(1,precio);
    }   

}





// <input  class="itemElement" id="cxi" type="number"  value="1"  style="width: 30px;"   onchange="calcSubItems(this.value, ${precio})">




function incrementaQItem(x) {

    carritoShow = "";
    divCarrito.innerHTML = "";

    cant++
    console.log(cant);
    show();
    
}

function decrementaQItem(x) {
    carritoShow = "";
    divCarrito.innerHTML = "";

    if (cant===1) {
        cant = 1
    } else {
        cant--    
    }
    console.log(cant);
    show();
    
}


function calcSubItems(v, p) {
    subTotItems = v * p;
    return subTotItems;

}
// calcSubItems();




function home() {
    location.href = 'index.html';
}

function borrarProducto(x) {
    carritoShow = "";
    divCarrito.innerHTML = "";

    carritoView.splice(x, 1)
    saveNewLocalSorage();
    show();
}

const saveNewLocalSorage = () => {
    localStorage.setItem('pedido', JSON.stringify(carritoView));
}
