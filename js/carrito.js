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
        tarjetaProdCarrito.setAttribute('id','idProdCarrito')
        tarjetaProdCarrito.setAttribute('class','articleCarrito')
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
    const productoAEliminar = carrito.find(prod => prod.id == id);
    
    Swal.fire({
        title: '¿Estás seguro?',
        html: `
            <p>¿Quieres eliminar este producto del carrito?</p>
            <strong>${productoAEliminar.marca} ${productoAEliminar.kg}kg</strong>
            <p>Cantidad: ${productoAEliminar.cantidad}</p>
            <p>Precio: $${productoAEliminar.precio * productoAEliminar.cantidad}</p>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const indiceAEliminar = carrito.findIndex(prod => prod.id == id);
            carrito.splice(indiceAEliminar, 1);    
            localStorage.setItem('carrito', JSON.stringify(carrito));
            
            if(carrito.length == 0) {
                localStorage.clear();
            }
            
            Swal.fire({
                title: 'Producto eliminado',
                text: `${productoAEliminar.cantidad} x ${productoAEliminar.marca} ${productoAEliminar.kg} Kgs`,
                confirm: false,
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false
            }).then(() => {
                location.reload();
            });
        }
    });
}