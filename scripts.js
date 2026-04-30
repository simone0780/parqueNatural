        h1 = document.getElementById("el_titulo");
        h1.innerText = "mi web 1.1";
        h1.classList.add("texto-rojo");
        h1.classList.add("texto-subrayado");
        h1.style.color = "green";
        function cambiarEstiloConClases(){ 
            elementosConClase =document.getElementsByClassName("clase1");
        for (const elemento of elementosConClase) { 
            elemento.style.backgroundColor = "yellow";           
        }

             
        }
            console.log("debugeando...")
        console .log(h1);

        let boton = document.getElementById("miBoton");

        boton.addEventListener("click", function() {
            if (boton.style.backgroundColor === "blue") {
                boton.style.backgroundColor = "red";
            } else {
                boton.style.backgroundColor = "blue";
            }
            // Cambiar color del título
            if (h1.style.color === "green") {
                h1.style.color = "purple";
            } else {
                h1.style.color = "green";
            }
        });

        function hacerCosas() {
     

        }