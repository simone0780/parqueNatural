// Selecciona todas las etiquetas <img> del documento y guarda la lista en una constante.
// `querySelectorAll` devuelve un NodeList (parecido a un arreglo) con todas las imágenes encontradas.
const imagenes = document.querySelectorAll("img");
const CLAVE_MODO_OSCURO = "modoOscuroActivo";

const modoOscuroGuardado = localStorage.getItem(CLAVE_MODO_OSCURO) === "true";
if (modoOscuroGuardado) {
  document.body.classList.add("modo-oscuro");
}

function alternarModoOscuro() {
  document.body.classList.toggle("modo-oscuro");
  const modoOscuroActivo = document.body.classList.contains("modo-oscuro");
  localStorage.setItem(CLAVE_MODO_OSCURO, String(modoOscuroActivo));
}

const botonContacto = document.getElementById("contacto");

if (botonContacto) {
  botonContacto.addEventListener("click", alternarModoOscuro);
}

// Recorre cada imagen para prepararla como "ampliable" al hacer clic.
imagenes.forEach((imagen) => {
  // Agrega una clase CSS base para identificar visualmente que esta imagen puede ampliarse.
  // Esta clase puede usarse en `styles.css` para cambiar cursor, bordes o transiciones.
  imagen.classList.add("imagen-ampliable");

  // Escucha el evento click en cada imagen individual.
  imagen.addEventListener("click", () => {
    // Verifica si la imagen actual YA estaba ampliada antes del clic.
    // Esto permite alternar (toggle) su estado correctamente.
    const yaAmpliada = imagen.classList.contains("ampliada");

    // Quita la clase "ampliada" de TODAS las imágenes.
    // Con esto se garantiza que nunca queden varias imágenes ampliadas al mismo tiempo.
    imagenes.forEach((img) => img.classList.remove("ampliada"));

    // Si la imagen no estaba ampliada, entonces se amplía ahora.
    // Si ya estaba ampliada, no se vuelve a agregar la clase y queda normal.
    if (!yaAmpliada) {
      imagen.classList.add("ampliada");
    }
  });
});

