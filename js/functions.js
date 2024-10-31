async function ObtenerCotisacion() {
    try {
        const respuestaDeApi = await fetch("./cafeteria.json");
        if (!respuestaDeApi.ok) throw new Error("Error al obtener los datos");
        const dato = await respuestaDeApi.json();
        return dato;
    } catch (error) {
        console.error("Hubo un problema con la petición Fetch:", error);
    }
}

function mostrarDatos(recetario) {
    let html = '';
    let mostrar = document.querySelector('.row');

    recetario.forEach(function(imagen) {
        html += `
            <div class="col">
                <div class="card shadow-sm">
                    <img src="${imagen.foto}" alt="cafe" width="100%" height="325">
                    <div class="card-body">
                        <h4 class="title">${imagen.nombre}</h4>
                        <p class="card-text">Categoría: ${imagen.categoria}</p>
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

async function EsperarResultado() {
    const resultadoDeApi = await ObtenerCotisacion();
    if (resultadoDeApi) mostrarDatos(resultadoDeApi);
}

// Llamada inicial para obtener y mostrar los datos
EsperarResultado();
