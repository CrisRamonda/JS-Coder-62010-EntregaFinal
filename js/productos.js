// SE TRAE EL NODO PARA INCLUIR LOS PRODUCTOS
const nodoSectionProductos = document.querySelector('#idProductos')

// FUNCION LISTAR PRODUCTOS - RENDERIZADO DE PRODUCTOS
const listarProductos = (datos) => {
    datos.forEach(producto => {
        const tarjetaProducto = document.createElement('article')
        tarjetaProducto.setAttribute('id', 'idProducto')
        tarjetaProducto.setAttribute('class', 'articleProductos')
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

    // EVENTO PARA FN AGREGARPRODUCTO
    const botonAgregar = document.querySelectorAll('.botonProductos')
    botonAgregar.forEach(boton => {
        boton.addEventListener('click', (e) =>  {
            agregarProducto(e.target.id)
        })
    })
}

// DECLARAMOS LA LISTA DE PRODUCTOS QUE USAMOS PARA LA FUNCION DE AGREGAR
let productos = []

// EXCEPCION PARA LEER EL JSON, EJECUTAR LISTARPRODUCTOS (DOM)
const llamadoAJson = async () => {
    try {
        const respuesta = await fetch('../js/productos.json')
        if (!respuesta.ok) {
            throw new Error('Error al encontrar el JSON')
        }

        productos = await respuesta.json()
        listarProductos(productos)

        console.log('Todos los productos:', productos)
        console.log(respuesta.status) //200

    } catch (error) {
        console.error('Error Misterioso:', error)
    }
}

llamadoAJson()

// FUNCION PARA AGREGAR ELEMENTOS AL CARRITO 
let carrito = []
let checkCarrito = localStorage.getItem('carrito','')

// SI ALGO EN LOCAL STORAGE, REEMPLAZA VARIABLE PARSEANDO LOS DATOS
if(checkCarrito != null) {
    console.log('Check carrito:', checkCarrito)
    carrito = JSON.parse(checkCarrito)
}



function agregarProducto(id){
    let productoElegido = productos.find(prod => prod.id === parseInt(id))

    const agregado = carrito.some(prod => prod.id === parseInt(id)) // F o T

    if(agregado){
        let productoCarrito = carrito.find(prod => prod.id === parseInt(id))
        productoCarrito.cantidad++
    } else {
        carrito.push(productoElegido)
    }

    Swal.fire({
        title: 'Producto agregado',
        text: `${productoElegido.marca} ${productoElegido.tipo} ${productoElegido.kg} Kgs`,
        showConfirmButton: false, 
        timer: 1500,
        timerProgressBar: true,})

    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log('Carrito:', carrito)
}

