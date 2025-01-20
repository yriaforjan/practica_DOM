const header = document.querySelector("header");
header.innerHTML = `
<a id="logo" href="index.html">
    <img src="./assets/PcComponentes_logo.png" alt="PcComponentes logo">
</a>
<div id="menu" class="hoverGrey">
    <img src="./assets/icons/burger_menu.svg" alt="burger menu icon">
    <p>Todas las categorías</p>
</div>
<div id="search">
    <select name="catalog" id="catalog">
        <option value="all">Todo el catálogo</option>
        <option value="reconditioned">Reacondicionados</option>
    </select>
    <input type="search" name="searchingBar" id="searchingBar" placeholder="Buscar">
</div>
<div id="login">
    <a class="accountLink hoverGrey" href="https://www.pccomponentes.com/login?_gl=1*1eljdpj*_up*MQ..&gclid=Cj0KCQiA1p28BhCBARIsADP9HrOLzUuvhJYE3tLxYEdmo4pPFbMyexZtDFhUQ9ciZ1skPjBQGrXuNq4aApfNEALw_wcB">
        <img src="./assets/icons/profile_icon.svg" alt="profile icon">
        <p>Mi cuenta</p>
    </a>
    <a class="accountLink hoverGrey" href="#">
        <img src="./assets/icons/shopping_cart_icon.svg" alt="shopping cart icon">
        <p>Mi cesta</p>
    </a>
</div>
`

const main = document.querySelector("main");
const offerSection = document.createElement("section");
offerSection.id = "offerSection";
main.appendChild(offerSection);
offerSection.innerHTML = `
<div id="discount">
    <p>🎁 Consigue <span>10€ de descuento en tu primera compra</span></p>
    <p class="underline">Haz click aquí</p>
</div>
<div id="offers">
    <ul>
        <li><a class="hoverGrey" href="https://www.pccomponentes.com/smartphone-moviles/redmi-note-14-4g/redmi-note-14-5g/redmi-note-14-pro-4g/redmi-note-14-pro-5g/redmi-note-14-pro-plus-5g/xiaomi">Nuevo Redmi Note 14</a></li>
        <li><a class="hoverGrey" href="#">Portátiles</a></li>
        <li><a class="hoverGrey" href="https://www.pccomponentes.com/configurador/">Configurador PC</a></li>
        <li><a id="fiftyPercent" href="https://www.pccomponentes.com/ofertas-de-enero">¡<span>Ofertas</span> hasta -50%!</a></li>
    </ul>
</div>
`

const mainSection = document.createElement("section");
mainSection.id = "mainSection";
main.appendChild(mainSection);
mainSection.innerHTML = `
<div id="mainHeader">
    <nav id="navBar">
        <ul>
            <li><a href="https://www.pccomponentes.com/">Home</a></li>
            <li class="between"><a href="https://www.pccomponentes.com/ordenadores">Ordenadores</a></li>
            <li class="between"><a href="https://www.pccomponentes.com/ordenadores-portatiles">Ordenadores Portátiles</a></li>
            <li class="between"><a href="#products">Portátiles</a></li>
        </ul>
    </nav>
    <h1>Portátiles</h1>
    <div id="subtitle">
        <p>Exprime hasta la última hora del día con <span class="bold">nuestros portátiles de las mejores marcas</span>: <a class="underline" href="https://www.pccomponentes.com/portatil-hp">HP</a>, <a class="underline" href="https://www.pccomponentes.com/portatil-acer">Acer</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles-msi">MSI</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles-lenovo">Lenovo</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles-dell">Dell</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles/gigabyte">Gigabyte</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles/lg">LG</a>, <a class="underline" href="https://www.pccomponentes.com/portatil-asus">Asus</a> y <a class="underline" href="https://www.pccomponentes.com/macbook">Macbook</a>. Visita nuestra sección de <a class="underline" href="https://www.pccomponentes.com/portatiles-baratos">portátiles baratos</a>.</p>
    </div>
</div>
<div id="sideBar">
    <section id="filter">
        <div id="popularFilter">
            <h4>Filtros populares</h4>
            <ul>
                <li class="hoverGrey">Asus VivoBook 15</li>
                <li class="hoverGrey">Acer Nitro 5</li>
                <li class="hoverGrey">LG Gram</li>
                <li class="hoverGrey">MacBook Air M3</li>
            </ul>
            <button id="resetFilter" class="hoverGrey">Borrar filtros</button>
        </div>
        <div id="filterSearch">
            <h4>Búsqueda de filtros</h4>
            <input type="search" name="searchingFilter" id="searchingFilter" placeholder="Buscar...">
        </div>
       <div id="priceFilter" class="open" class="hoverGrey">
            <h4 class="hoverGrey">Precio</h4>
            <input type="range" name="priceRange" id="priceRange" min="148" max="8994" step="20">
            <div>
                <p class="box">149€</p>
                <p>-</p>
                <p class="box">8994€</p>
            </div>
       </div>
        <div id="brandFilter" class="open" class="hoverGrey">
            <h4 class="hoverGrey">Marcas</h4>
            <input type="search" name="brandSearch" id="brandSearch" placeholder="Buscar...">
            <ul>
                <li>
                    <input type="checkbox" name="asus" id="asus">
                    <label for="asus">Asus</label>
                </li>
                <li>
                    <input type="checkbox" name="hp" id="hp">
                    <label for="hp">HP</label>
                </li>
                <li>
                    <input type="checkbox" name="lenovo" id="lenovo">
                    <label for="lenovo">Lenovo</label>
                </li>
                <li>
                    <input type="checkbox" name="MSI" id="MSI">
                    <label for="MSI">MSI</label>
                </li>
            </ul>
            <button class="showMore hoverGrey">Ver más</button>
        </div>
        <div id="pcType" class="open" class="hoverGrey">
            <h4 class="hoverGrey">Tipo de Portátil</h4>
            <ul>
                <li>
                    <input type="checkbox" name="gaming" id="gaming">
                    <label for="gaming">Gaming</label>
                </li>
                <li>
                    <input type="checkbox" name="work" id="work">
                    <label for="work">Para estudiar o trabajar</label>
                </li>
                <li>
                    <input type="checkbox" name="ultrabook" id="ultrabook">
                    <label for="ultrabook">Ultrabook</label>
                </li>
                <li>
                    <input type="checkbox" name="convertible" id="convertible">
                    <label for="convertible">2 en 1 Convertible</label>
                </li>
                <li>
                    <input type="checkbox" name="workstation" id="workstation">
                    <label for="workstation">Workstation</label>
                </li>
            </ul>
            <button class="showMore hoverGrey">Ver más</button>
        </div>
        <div id="processorFilter" class="open">
            <h4 class="hoverGrey">Procesador</h4>
            <input type="search" name="processorSearch" id="processorSearch" placeholder="Buscar...">
            <ul>
                <li>
                    <input type="checkbox" name="i7" id="i7">
                    <label for="i7">Intel Core i7</label>
                </li>
                <li>
                    <input type="checkbox" name="i5" id="i5">
                    <label for="i5">Intel Core i5</label>
                </li>
                <li>
                    <input type="checkbox" name="i9" id="i9">
                    <label for="i9">Intel Core i9</label>
                </li>
                <li>
                    <input type="checkbox" name="ryzen7" id="ryzen7">
                    <label for="ryzen7">AMD Ryzen 7</label>
                </li>
            </ul>
            <button class="showMore hoverGrey">Ver más</button>
        </div>
        <div id="moreFilter">
            <ul>
                <li>Memoria RAM</li>
                <li>Tarjeta Gráfica</li>
                <li>Sistema Operativo</li>
                <li>Idioma del Teclado</li>
                <li>Pulgadas</li>
                <li>Almacenamiento SSD</li>
                <li>Inteligencia Artificial</li>
                <li>Tipo Pantalla</li>
                <li>Tipo Memoria</li>
                <li>Resolución</li>
                <li>Conexiones</li>
                <li>Almacenamiento</li>
                <li>Frecuencia de Refresco</li>
                <li>Clase de Teclado</li>
                <li>Color</li>
                <li>Conectividad</li>
                <li>Baterías</li>
                <li>Características Especiales</li>
                <li>Pccom</li>
                <li>Generación</li>
                <li>Unidad Óptica</li>
                <li>Destacados</li>
                <li>Entrega</li>
                <li>Vendido por</li>
                <li>Valoración</li>
                <li>Disponibilidad en tienda</li>
                <li>Estado del Artículo</li>
            </ul>
        </div>
    <section id="blogLinks">
        <ul>
            <li><a href="https://www.pccomponentes.com/mejor-portatil-gamer-calidad-precio">Mejores portátiles relación calidad precio</a></li>
            <li><a href="https://www.pccomponentes.com/como-elegir-el-mejor-portatil-para-ti">¿Cómo elegir un portátil?</a></li>
            <li><a href="https://www.pccomponentes.com/como-elegir-un-portatil-para-estudiantes">¿Cómo elegir portátil para un estudiante?</a></li>
            <li><a href="https://www.pccomponentes.com/como-elegir-mejor-portatil-para-trabajar">¿Cómo elegir el mejor portátil para trabajar?</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-portatiles-gaming">Mejores portátiles gaming</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-portatiles-ligeros">Mejores portátiles ligeros</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-portatiles-para-ninos">Mejores portátiles para niños</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-marcas-de-portatiles">Mejores marcas de ordenadores portátiles</a></li>
        </ul>
    </section>
</div>
<div id="mainContent">
    <section id="products">
        <h2>Pc</h2>
    </section>
</div>
`

