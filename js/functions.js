async function ObtenerDatos() {
        const res = await fetch("./cafeteria.json");
        const dato = await res.json();
        return dato;
}

async function EsperarResultado(dato) {
    let mostrar = document.querySelector('.row');
    let html = '';

    dato.forEach((element) => {
        html += `
            <div class="col">
                <div class="card shadow-sm">
                    <img src="${element.foto}" alt="cafe" width="100%" height="325">
                    <div class="card-body">
                        <h4 class="title">${element.nombre}</h4>
                        <p class="card-text">Categoría: ${element.categoria}</p>
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver receta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    mostrar.innerHTML = html;
}

function FiltrarPorCategoria(dato, categoria) {
    if (categoria === 'Todo') {
        return dato;
    }
    const filtrados = dato.filter((producto) => producto.categoria === categoria);
    return filtrados;
}

// Función para buscar productos por nombre, categoría o ID
function BuscarProducto(dato, busqueda) {
    const query = busqueda.toLowerCase(); 
    return dato.filter((producto) =>
        producto.nombre.toLowerCase().includes(query) ||
        producto.categoria.toLowerCase().includes(query) ||
        producto.id.toString().includes(query)
    );
}

// Configurar búsqueda y filtros
async function ConfigurarFiltros() {
    const dato = await ObtenerDatos();

    // Configurar eventos de filtro
    document.querySelector('#todo').addEventListener('click', () => {
        EsperarResultado(FiltrarPorCategoria(dato, 'Todo'));
    });

    document.querySelector('#bebidas-frias').addEventListener('click', () => {
        EsperarResultado(FiltrarPorCategoria(dato, 'Bebida fria'));
    });

    document.querySelector('#bebidas-calientes').addEventListener('click', () => {
        EsperarResultado(FiltrarPorCategoria(dato, 'Bebida caliente'));
    });

    document.querySelector('#postres').addEventListener('click', () => {
        EsperarResultado(FiltrarPorCategoria(dato, 'Postre'));
    });

    document.querySelector('#tortas').addEventListener('click', () => {
        EsperarResultado(FiltrarPorCategoria(dato, 'Torta'));
    });

    // Configurar búsqueda
    const buscarInput = document.querySelector('#search-input');
    const buscarButton = document.querySelector('#search-button');

    // Manejar evento de búsqueda
    buscarButton.addEventListener('click', () => {
        const query = buscarInput.value;
        EsperarResultado(BuscarProducto(dato, query));
    });
}

async function IniciarAplicacion() {
    const datos = await ObtenerDatos();
    EsperarResultado(datos);
    ConfigurarFiltros();
}

IniciarAplicacion();

//ObtenerDatos no tiene pararamtero viene vacio

//FiltroBoton puede llegar a tener varios filtros

    //FiltrarFrios recibe todos los productos y los filtra para que nada más se muestre esa categoria


    //MuestraDatos el parametro que apareceria seria mostrar el dato, productos que se quieran ver

        //MOstrarAlgo el parametro recibe solo uno


//EsperarResultado(datos);
