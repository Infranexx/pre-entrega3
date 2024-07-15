const carrito = [];

const productosMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const productosMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();


};

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => "- "+producto.nombre+ " $"+producto.precio);
    alert("Lista de precios "+listaOrdenada.join("\n"));

    comprarProductos(listaOrdenada);
};
const comprarProductos = (listaOrdenada) => {
    let productoNombre = "";
    let productoCantidad = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt("Escriba el nombre del producto a comprar\n\n"+listaOrdenada.join("\n"));
        productoCantidad = parseInt(prompt("Ingrese la cantidad"));

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());
    
        if (producto) {
            agregarAlCarrito(producto, productoCantidad, producto.id);     
        } else {
            alert("No se encontró el producto solicitado")
        }

        seguirComprando = confirm("¿Desea continuar llenando el carrito?");
    }    while (seguirComprando);
};

const agregarAlCarrito = (producto, productoCantidad, productoId) => {

    const productoRepetido = carrito.find(producto => producto.id == productoId);

    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad;
        carrito.push(producto);
    }
    console.log(carrito);
}

productosMayorMenor();