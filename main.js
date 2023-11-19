function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    const contenedorImagenes = document.querySelector('.contenedor-imagenes');
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');
    const mostrarMasBoton = document.getElementById('mostrarMas');

    let currentIndex = 0;

    mostrarMasBoton.addEventListener('click', function () {
        currentIndex += 3;

        if (currentIndex >= imagenes.length) {
            currentIndex = 0;
        }

        actualizarImagenes();
    });

    function actualizarImagenes() {
        imagenes.forEach((imagen, index) => {
            if (index < currentIndex || index >= currentIndex + 3) {
                imagen.classList.add('oculto');
            } else {
                imagen.classList.remove('oculto');
            }
        });
    }
});