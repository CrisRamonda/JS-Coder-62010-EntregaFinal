// SE TRAE EL NODO PARA INCLUIR LOS PRODUCTOS
const nodoSectionProductos = document.querySelector('#idProductos')

console.log(productos)

// NUEVO
// FUNCION LISTAR PRODUCTOS - RENDERIZADO DE PRODUCTOS
const listarProductos = (datos) => {
    datos.forEach(producto => {
        const tarjetaProducto = document.createElement('article')
        tarjetaProducto.setAttribute('idProducto', 'articleProductos')
        tarjetaProducto.innerHTML =`
                                <!-- IMAGEN DEL PRODUCTO -->
                                <img class="fotoProductos"  src="../images/ProductoAlimentoPerro.jpg" alt="IMAGEN DE ALIMENTO DE PERRO EN UN PLATO, JUNTO A UNA PATA DE PERRO">
                                <h3 class="subTituloProductos">
                                    Balanceado ${producto.marca} ${producto.kg}kg
                                </h3>
                                <ul>
                                    <li>${producto.marca}</li>
                                    <li>${producto.tipo}</li>
                                    <li>$${producto.precio}</li>
                                    <button id="${producto.id}" class="btn botonProductos">AGREGAR</button>
                                </ul>
                                `
        nodoSectionProductos.appendChild(tarjetaProducto)
    })
    const botonAgregar = document.querySelectorAll('.botonProductos')
    botonAgregar.forEach(boton => {
        boton.addEventListener('click', (e) =>  {
            agregarProducto(e.target.id)
        })
    })
}

listarProductos(productos)

// FUNCION PARA AGREGAR ELEMENTOS AL CARRITO
const carrito = []

function agregarProducto(id){
    let productoElegido = productos.find(prod => prod.id === parseInt(id))
    console.log(productoElegido);
    const agregado = carrito.some(prod => prod.id === parseInt(id))

    if(agregado){
        carrito.map(prod => prod.cantidad++)
    } else {
        carrito.push(productoElegido)
    }
    
    console.log(carrito);
}



//VIEJO
// // HTML PARA INCLUIR PRODUCTOS
// productos.forEach(prod => {
//     nodoSectionProductos.innerHTML += `
//         <article id="idProducto" class="articleProductos">
            // <!-- IMAGEN DEL PRODUCTO -->
            // <img class="fotoProductos"  src="../images/ProductoAlimentoPerro.jpg" alt="IMAGEN DE ALIMENTO DE PERRO EN UN PLATO, JUNTO A UNA PATA DE PERRO">
            // <h3 class="subTituloProductos">
            //     Balanceado ${prod.marca} ${prod.kg}kg
            // </h3>
            // <ul>
            //     <li>${prod.marca}</li>
            //     <li>${prod.tipo}</li>
            //     <li>$${prod.precio}</li>
            //     <button id="${prod.id}" class="btn botonProductos">AGREGAR</button>
            // </ul>
//         </article>
//     `
// })

// const nodoProducto = Array.from(document.getElementsByClassName('articleProductos'))
// const nodoBoton = document.getElementById('idBotonProductos')

// // AGREGAR PRODUCTO 
// let carrito = []
// let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))

// const botonesAgregar = document.querySelectorAll('.botonProductos')
// botonesAgregar.forEach(prod => prod.addEventListener('click', agregarProducto))

// function agregarProducto(e) {
//     if(carritoLocalStorage){
//         carrito = carritoLocalStorage;
//     }

//     let id = 0
//     let marca = e.target.parentNode.children[0].innerText
//     let tipo = e.target.parentNode.children[1].innerText
//     let precio = e.target.parentNode.children[2].innerText
    
//     productoAgregar = {
//         idCarrito: id,
//         marcaCarrito: marca,
//         tipoCarrito: tipo,
//         precioCarrito: precio,
//     }

//     carrito.push(productoAgregar)
//     localStorage.setItem("carrito", JSON.stringify(carrito));

// }


