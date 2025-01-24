// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Añado los elementos del DOM de forma correcta
const listaProductos = document.getElementById("lista-de-productos");
const textoFiltro = document.getElementById("input-filtro");
const botonFiltrar = document.getElementById("boton-filtrar");


// Defino la función para poder mostrar los productos
function mostrarProductos(productos) {
  // funsión para limpiar lista de productos
  listaProductos.innerHTML = "";

  //Agregar cada prodcto al DOM
for (let i = 0; i < productos.length; i++) {

  //Traigo cada elemento
  const producto = productos[i];

//cambio var por const
  const d = document.createElement("div");
  d.classList.add("producto");

  //Cambio var por const

  const ti = document.createElement("p");
  ti.classList.add("titulo");
  //Traigo cada producto de la lista
  ti.textContent = producto.nombre

  //Imagen de producto 
  
  const imagen = document.createElement("img");
  //traer la imagen para mostrar
  imagen.setAttribute("src", producto.img);
  imagen.setAttribute("alt", producto.nombre);


  d.appendChild(ti)
  d.appendChild(imagen)

// Agregar el método
listaProductos.appendChild(d);
}
}

//Añado funcion para añadir productos
function filtrarProductos(productos, texto) {
  // Filtar segun lo que le usuario ingerse
  return productos.filter((producto) => {
    return (
      producto.tipo.toLowerCase().includes(texto.toLowerCase()) ||
      producto.color.toLowerCase().includes(texto.toLowerCase())
    );
  });
}

// Se muestran los productos cunaod se ingresa a la página
mostrarProductos(productos);

// Añado evento de filtrar de forma correcta
botonFiltrar.addEventListener("click", function () {
  const textoFiltro = inputFiltro.value.trim(); // Obtiene el texto del input
  const productosFiltrados = filtrarProductos(productos, textoFiltro); // Aplica el filtro
  mostrarProductos(productosFiltrados); // Muestra los productos filtrados
});
