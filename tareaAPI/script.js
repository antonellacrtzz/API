const url = 'https://restcountries.com/v3.1/all';
let paises = [];

async function cargarPaises() {
    try {
        const respuesta = await fetch(url);
        paises = await respuesta.json();
    } catch (error) {
        console.error("Error al cargar los datos de países:", error);
    }
}

cargarPaises();


function buscarPais() {
    const nombreBuscado = document.getElementById('buscador').value.toLowerCase();
    const pais = paises.find(p => p.name.common.toLowerCase() === nombreBuscado);

    const contenedorResultado = document.getElementById('resultadoPais');
    contenedorResultado.innerHTML = ''; 

    if (pais) {
        
        const nombre = pais.name.common;
        const bandera = pais.flags.png;
        const region = pais.region;
        const capital = pais.capital ? pais.capital[0] : 'No disponible';
        const idiomas = pais.languages ? Object.values(pais.languages).join(', ') : 'No disponible';

        const tarjeta = `
            <div class="card" style="width: 18rem;">
                <img src="${bandera}" class="card-img-top" alt="Bandera de ${nombre}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text"><strong>Región:</strong> ${region}</p>
                    <p class="card-text"><strong>Capital:</strong> ${capital}</p>
                    <p class="card-text"><strong>Idiomas:</strong> ${idiomas}</p>
                </div>
            </div>
        `;

        contenedorResultado.innerHTML = tarjeta;
    } else {
        contenedorResultado.innerHTML = '<p class="text-danger">País no encontrado. Intenta con otro nombre.</p>';
    }
}