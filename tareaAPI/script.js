
const url = 'https://restcountries.com/v3.1/all';

async function obtenerPaises() {
    try {
        const respuesta = await fetch(url);
        const paises = await respuesta.json();

        // Selecciona el contenedor para agregar los datos
        const contenedor = document.getElementById('contenedorPaises');
        paises.forEach(pais => {
            // Crea un elemento div para cada país
            const paisDiv = document.createElement('div');
            paisDiv.classList.add('pais');

            // Obtén el nombre, bandera y población del país
            const nombre = pais.name.common;
            const bandera = pais.flags.png;
            const poblacion = pais.population;

            // Agrega el contenido al div
            paisDiv.innerHTML = `
                <h2>${nombre}</h2>
                <img src="${bandera}" alt="Bandera de ${nombre}" width="100">
                <p>Población: ${poblacion.toLocaleString()}</p>
            `;

            // Añade el div al contenedor
            contenedor.appendChild(paisDiv);
        });
    } catch (error) {
        console.error("Error al obtener los datos de países:", error);
    }
}

// Llama a la función para cargar los datos
obtenerPaises();
