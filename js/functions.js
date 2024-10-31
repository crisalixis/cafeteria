async function ObtenerCotisacion() {
    try {
        const RespuestadeApi = await fetch("./cafeteria.json");
        if (!RespuestadeApi.ok) throw new Error("Error al obtener los datos");
        const dato = await RespuestadeApi.json();
        return dato;
    } catch (error) {
        console.error("Lol", error);
    }
}

async function EsperarResultado() {
    const ResultadoDeApi = await ObtenerCotisacion();
    if (!ResultadoDeApi) return;  // Evita continuar si no hay datos

    let mostrar = document.querySelector('.row');
    let html = '';

    ResultadoDeApi.forEach((element) => {
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

// Llamada inicial para cargar los datos
EsperarResultado();
