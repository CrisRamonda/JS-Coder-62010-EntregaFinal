// CAPTURA DE NODOS
const nodoSectionCarrito = document.querySelector('#idSectionCarrito')
const nodoSubTitCarrito = document.querySelector('#idSubTituloCarrito')

// VARIABLES CARRITO
let carrito = []
let checkCarrito = localStorage.getItem('carrito','')

// FUNCION CALCULAR TOTAL
let total = 0

function totalCarrito(datos) {
    for (const producto of datos) {
        total += (producto.cantidad * producto.precio)
    }
    return total
}

// FUNCION LISTAR CARRITO
const listarCarrito = (datos) => {
    datos.forEach(producto => {
        const tarjetaProdCarrito = document.createElement('article')
        tarjetaProdCarrito.setAttribute('idProdCarrito', 'articleCarrito')
        tarjetaProdCarrito.innerHTML =`
                                <!-- IMAGEN DEL PRODUCTO -->
                                <img class="fotoCarrito"  src="../images/Carrito.jpg" alt="IMAGEN DE PERRO CON UN CARRITO PEQUEÑO">
                                <h3 class="subTituloCarrito">
                                    ${producto.cantidad} x ${producto.marca} ${producto.kg}kg
                                </h3>
                                <ul>
                                    <li>${producto.tipo}</li>
                                    <li>Total: $${producto.precio * producto.cantidad}</li>
                                    <button id="${producto.id}" class="btn botonCarrito">ELIMINAR</button>
                                </ul>
                                `
        nodoSectionCarrito.appendChild(tarjetaProdCarrito)
    })

        // EVENTO PARA FN ELIMINARPRODUCTO
        const botonEliminar = document.querySelectorAll('.botonCarrito')
        botonEliminar.forEach(boton => {
            boton.addEventListener('click', (e) =>  {
                eliminarProducto(e.target.id)
            })
        })
}

// SI ALGO EN LOCAL STORAGE, REEMPLAZA VARIABLE PARSEANDO LOS DATOS
// MODIFICA EL DOM
if(checkCarrito != null) {
    console.log('Check carrito:', checkCarrito)
    carrito = JSON.parse(checkCarrito)

    listarCarrito(carrito)
    totalCarrito(carrito)
    nodoSubTitCarrito.innerHTML = `TOTAL = $ ${total}`
    console.log(total)
} else {
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
}

// FUNCION ELIMINAR PRODUCTO
const eliminarProducto = (id) => {
    const indiceAEliminar = carrito.findIndex(prod => prod.id == id)
    console.log('carrito antes', carrito)

    carrito.splice(indiceAEliminar)    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log('Carrito Dps:', carrito)
    console.log('Carrito lenght', carrito.length)
    
    if(carrito.length == 0) {
        localStorage.clear()
    }
    location.reload()
}

//////EJEMPLO (BORRAR)
function agregarProducto(id){
    let productoElegido = productos.find(prod => prod.id === parseInt(id))

    const agregado = carrito.some(prod => prod.id === parseInt(id)) // F o T

    if(agregado){
        let productoCarrito = carrito.find(prod => prod.id === parseInt(id))
        productoCarrito.cantidad++
    } else {
        carrito.push(productoElegido)
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log('Carrito:', carrito)
}