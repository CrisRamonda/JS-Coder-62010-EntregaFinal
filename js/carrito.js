// HTML PARA CARRITO
const nodoSectionCarrito = document.getElementById('idSectionCarrito')

if (carritoLocalStorage === null || carritoLocalStorage.length === 0) {
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
    let carritoHtml = ``
    for(let prod of carritoLocalStorage) {
        carritoHtml += `
            <article class="articleCarritoLleno">
                <ul>
                    <li>${prod.marcaCarrito}</li>
                    <li>${prod.tipoCarrito}</li>
                    <li>${prod.precioCarrito}</li>
                    <button id="idBotonCarrito" class="btn botonCarrito">ELIMINAR</button>
                </ul>
            </article>`
    }
    nodoSectionCarrito.innerHTML = carritoHtml
}

