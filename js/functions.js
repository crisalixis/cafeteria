/*async function datosCafeteria() {
    const res = await fetch("https://www.swapi.tech/api/people/1"); //busca los datos de la API en algun lugar que se desconoce
        const dato = await res.json();
        return dato;

}

datosCafeteria();

const ul = document.createElement("ul");*/
/*let recetario = [
    {
        "id": 1,
        "nombre": "Batido de cafe",
        "categoria": "Bebida", 
        "foto": "https://raw.githubusercontent.com/crisalixis/cafeteria/refs/heads/main/img/bebidas/1/1.jpg"
    },
    {
        "id": 2,
        "nombre": "Frappe",
        "categoria": "Bebida",
        "foto": "https://raw.githubusercontent.com/crisalixis/cafeteria/refs/heads/main/img/bebidas/2/2.jpg"
    },
    {
        "id": 3,
        "nombre": "Cafe helado",
        "categoria": "Bebida",
        "foto": "https://raw.githubusercontent.com/crisalixis/cafeteria/refs/heads/main/img/bebidas/2/2.jpg"
    }
]*/

/*
function mostrarDatos(recetario){
    let html = '';
    let mostrar =  document.querySelector('.row');
        recetario.forEach(function(imagen){
            html +=`
            <div class="col">
                <div class="card shadow-sm">
                    <img src="${imagen.foto}" alt="cafe "width="100%" height="325">
                    <div class="card-body">
                    <h4 class="title">${imagen.nombre}</h4>
                    <p class="card-text">Categoria: ${imagen.categoria}</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Ver receta</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        `;
    })

   mostrar.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarDatos(recetario);
});*/


async function ObtenerCotisacion () {
    
    const RespuestadeApi = await fetch("./cafeteria.json")
        const dato = await RespuestadeApi.json()
        return dato

}
const ul = document.createElement("ul");
async function EsperarResultado (){
    const ResultadoDeApi = await ObtenerCotisacion()

    ResultadoDeApi.forEach((element) => {
        const li = document.createElement("li")
        li.innerText=element.moneda + ':  '  + element.nombre + ':  '  + element.compra + '  '  + element.venta     // <el>innerText</el>
        const br= document.createElement("br")
        ul.appendChild(li)  // <el><append></append></el>
        ul.appendChild(br)
    });

    
}

async function crearElement(){
    await EsperarResultado()
    let Lista = document.querySelector("#ACa")   
    Lista.append(ul)

}

crearElement()