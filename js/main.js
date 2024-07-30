// // SE TRAE EL NODO PARA INCLUIR LOS PRODUCTOS
// nodoSectionProductos = document.getElementById('idProductos')

// // HTML PARA INCLUIR PRODUCTOS
// if (nodoSectionProductos) {
//     productos.forEach(prod => {
//         nodoSectionProductos.innerHTML += `
//             <article id="idProducto" class="articleProductos">
//                 <!-- IMAGEN DEL PRODUCTO -->
//                 <img id="${prod.id}" class="fotoProductos"  src="../images/ProductoAlimentoPerro.jpg" alt="IMAGEN DE ALIMENTO DE PERRO EN UN PLATO, JUNTO A UNA PATA DE PERRO">
//                 <h3 class="subTituloProductos">
//                     Balanceado ${prod.marca} ${prod.kg}kg
//                 </h3>
//                 <ul>
//                     <li>${prod.marca}</li>
//                     <li>${prod.tipo}</li>
//                     <li>$${prod.precio}</li>
//                     <button id="idBotonProductos" class="btn botonProductos">AGREGAR</button>
//                 </ul>
//             </article>
//         `
//     })
// }

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






// HTML PARA CARRITO
const nodoSectionCarrito = document.getElementById('idSectionCarrito')

if (nodoSectionCarrito) {
    if (carritoLocalStorage === null || carritoLocalStorage.lenght === 0) {
        nodoSectionCarrito.innerHTML = `
            <article class="articleCarrito">
                <!-- IMAGEN DEL PRODUCTO -->
                <a class="enlaceCarrito" href="../pages/categorias-prod.html">
                    <img class="fotoCarrito"  src="../images/PerroPlatoVacio.png" alt="IMAGEN DE PERRO CON PLATO VACIO">
                </a>
                <h2 class="subTituloCarrito">
                    ¡El carrito está vacío!
                </h2>
                <p>
                    Presiona en la imagen para volver y elegir tus productos
                </p>
            </article>
            `   
    } else {
        for(let prod of carritoLocalStorage) {
            nodoSectionCarrito.innerHTML +=`
                <article class="articleCarritoLleno">
                    <ul>
                        <li>${prod.marcaCarrito}</li>
                        <li>${prod.tipoCarrito}</li>
                        <li>${prod.precioCarrito}</li>
                        <button id="idBotonCarrito" class="btn botonCarrito">ELIMINAR</button>
                    </ul>
                </article>
            `
        }
    }
}


