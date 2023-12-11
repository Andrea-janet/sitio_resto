
//obtengo la ruta del archivo html
let pag_actual = window.location.pathname;

let header1 = `<div class="container">
<h1>Bistró Encanto</h1>
</div>
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link text-white" href="./index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="./paginas/nosotros.html">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="./paginas/contacto.html">Contacto</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="./paginas/carta_clientes.html">Carta</a></li>
        </ul>
    </div>
</div>
</nav>`;

let header2 = `<div class="container">
<h1>Bistró Encanto</h1>
</div>
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link text-white" href="../index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="./nosotros.html">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="./contacto.html">Contacto</a></li>
            <li id="carta" class="nav-item"><a class="nav-link text-white" href="./carta_clientes.html">Carta</a></li>
        </ul>
    </div>
</div>
</nav>`;

//si el archivo se encuentra en el subdirectorio "paginas" entonces le asigno el header 2
if (pag_actual.includes("paginas")) { 
    document.getElementById("header2").innerHTML = header2;
} else {//sino le asigno el header 1
    document.getElementById("header").innerHTML = header1;
}

foot=`
<div class="container">
    <div class="row">
        <div class="col-6">
            <h4>Contacto</h4>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Email: info@bistroencanto.com</p>
            <p>Teléfono: +123 456 789</p>
        </div>
        <div class="col-6">
            <h4>Seguinos en redes sociales!</h4>
            <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="col-12 mt-5">
            <hr>
            <h4>Aviso Legal</h4>
            <p>&copy; 2023 Bistró Encanto. Todos los derechos reservados.</p>
        </div>
    </div>
</div>`

document.getElementById("footer").innerHTML= foot


document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos el botón del navbar
    const navbarButton = document.getElementById('navbarButton');

    // Agregamos un evento al hacer clic en el botón
    navbarButton.addEventListener('click', function () {
        // Obtenemos el navbarNav
        const navbarNav = document.getElementById('navbarNav');

        // Alternamos la clase 'show' para mostrar o esconder el menú desplegable
        navbarNav.classList.toggle('show');
    });
});