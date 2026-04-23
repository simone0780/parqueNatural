const imagenes = document.querySelectorAll("img");

    imagenes.forEach((imagen) => {
      imagen.classList.add("imagen-ampliable");
      imagen.addEventListener("click", () => {
        imagen.classList.toggle("ampliada");
      });
    });

 