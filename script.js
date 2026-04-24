const imagenes = document.querySelectorAll("img");

imagenes.forEach((imagen) => {
  imagen.classList.add("imagen-ampliable");
  imagen.addEventListener("click", () => {
    const yaAmpliada = imagen.classList.contains("ampliada");
    imagenes.forEach((img) => img.classList.remove("ampliada"));
    if (!yaAmpliada) {
      imagen.classList.add("ampliada");
    }
  });
});

