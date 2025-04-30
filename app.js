const productos = [
  { id: 1, 
    nombre: 'Bouquet Lavanda Suave',
    tipoflor: "Girasol y Margaritas",
    descripcion: "descripción breve",
    medidas: "medidas altura X ancho", 
    precio: 35, 
    imagen: 'imagenes/ramo1.jpeg' },

  { id: 2, 
    nombre: 'Bouquet Lavanda Suave', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 40, 
    imagen: 'imagenes/ramo2.jpeg' },

  { id: 3, 
    nombre: 'Ramo Colores Pastel', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 28, 
    imagen: 'imagenes/ramo3.jpeg' },

  { id: 4, 
    nombre: 'Ramo Rosa Encanto', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 20, 
    imagen: 'imagenes/ramo4.jpeg' },

  { id: 5, 
    nombre: 'Bouquet Lavanda Suave', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 22, 
    imagen: 'imagenes/ramo5.jpeg' },

  { id: 6, 
    nombre: 'Ramo Colores Pastel', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 25, 
    imagen: 'imagenes/ramo6.jpeg' },

  { id: 7, 
    nombre: 'Ramo Rosa Encanto', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 35, 
    imagen: 'imagenes/ramo7.jpeg' },

  { id: 8, 
    nombre: 'Bouquet Lavanda Suave', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 45, 
    imagen: 'imagenes/ramo8.jpeg' },

  { id: 9, 
    nombre: 'Ramo Colores Pastel', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 25, 
    imagen: 'imagenes/ramo9.jpeg' },

  { id: 10, 
    nombre: 'Ramo Rosa Encanto', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 30, 
    imagen: 'imagenes/ramo10.jpeg' },

  { id: 11, 
    nombre: 'Bouquet Lavanda Suave', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 32, 
    imagen: 'imagenes/ramo11.jpeg' },

  { id: 12, 
    nombre: 'RAMO DE GIRASOL Y MARGARITAS', 
    tipoflor: "Girasol y Margaritas", 
    descripcion: "descripción breve", 
    medidas: "medidas altura X ancho", 
    precio: 15, 
    imagen: 'imagenes/ramo12.jpeg' }
];

let carrito = [];

const catalogo = document.getElementById('catalogo');
const carritoContenedor = document.getElementById('carrito');
const carritoItems = document.getElementById('carrito-items');
const totalElemento = document.getElementById('total');
const botonVaciar = document.querySelector(".vaciar-carrito");

// Mostrar productos en el catálogo
function mostrarProductos() {
  productos.forEach(p => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.tipoflor}</p>
      <p>${p.descripcion}</p>
      <p>${p.medidas}</p>
      <h4><p class="precio">S/ ${p.precio} Soles</p></h4>
      <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
    `;
    catalogo.appendChild(div);
  });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  carritoItems.innerHTML = '';
  let total = 0;
  carrito.forEach((p, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${p.nombre} - S/ ${p.precio}</span>
      <button onclick="eliminarProducto(${index})">X</button>
    `;
    carritoItems.appendChild(li);
    total += p.precio;
  });
  totalElemento.textContent = total;
}

// Eliminar producto del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Vaciar todo el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Mostrar u ocultar el carrito
function toggleCart() {
  carritoContenedor.style.display = (carritoContenedor.style.display === "none" || carritoContenedor.style.display === "") ? "block" : "none";
}

// Cerrar carrito
function cerrarCarrito() {
  carritoContenedor.style.display = "none";
}

// Mostrar catálogo al cargar
mostrarProductos();
botonVaciar.addEventListener("click", vaciarCarrito);

// Contactar por WhatsApp con el carrito
function contactarWhatsApp() {
  let mensaje = "¡Hola! Me gustaría realizar el siguiente pedido:\n\n";
  carrito.forEach((producto) => {
    mensaje += `Producto: ${producto.nombre} | Precio: S/ ${producto.precio}\n`;
  });
  mensaje += `\nTotal: S/ ${totalElemento.textContent}\n`;
  mensaje += "¡Gracias por tu atención!";
  const numeroWhatsApp = "+51904529674";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// Carrusel de imágenes
let indice = 0;
const imagenes = document.querySelectorAll('#carrusel img');
const indicadores = document.getElementById('indicadores');

// Mostrar imagen del carrusel
function mostrarImagen(indiceNuevo) {
  imagenes[indice].classList.remove('activo');
  indice = (indiceNuevo + imagenes.length) % imagenes.length;
  imagenes[indice].classList.add('activo');
  actualizarIndicadores();
}

// Actualizar los puntos indicadores
function actualizarIndicadores() {
  const indicadoresSpan = document.querySelectorAll('#indicadores span');
  indicadoresSpan.forEach((span, index) => {
    span.classList.remove('activo');
    if (index === indice) {
      span.classList.add('activo');
    }
  });
}

// Crear indicadores dinámicamente
function crearIndicadores() {
  productos.forEach((_, index) => {
    const span = document.createElement('span');
    span.onclick = () => mostrarImagen(index);
    indicadores.appendChild(span);
  });
}

// Iniciar carrusel
crearIndicadores();
setInterval(() => {
  mostrarImagen(indice + 1);
}, 2000);

// Enviar pedido (formulario personalizado)
document.getElementById('formulario-pedido').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const nombre = form.nombre.value.trim();
  const producto = form.producto.value.trim();
  const cantidad = form.cantidad.value.trim();
  const direccion = form.direccion.value.trim();
  const whatsapp = form.whatsapp.value.trim();

  if (!nombre || !producto || !cantidad || !direccion || !whatsapp) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const mensaje = `¡Hola! 😊 Me gustaría hacer un pedido personalizado:\n\n` +
                  `👤 Nombre: ${nombre}\n` +
                  `🌸 Producto: ${producto}\n` +
                  `🔢 Cantidad: ${cantidad}\n` +
                  `🏠 Dirección y mensaje: ${direccion}\n` +
                  `📱 Mi número: ${whatsapp}`;

  const numeroDestino = "51904529674"; // SIN + ni espacios
  const urlWhatsApp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;

  window.open(urlWhatsApp, "_blank");

  form.reset();

  alert('¡Pedido enviado! Abriremos tu WhatsApp para continuar 😊');
});