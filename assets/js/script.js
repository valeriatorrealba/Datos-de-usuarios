const userData = document.getElementById("user-data");
const obtenerDatos = async() =>{
    const url="https://randomuser.me/api/?results=5000"
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(respuesta);

        datos.forEach(post => {
            const imagen = document.createElement('img');
            const nombre = document.createElement('h2');
            const correo = document.createElement('p');
            const telefono = document.createElement('p');

            imagen.textContent = post.picture.thumbnail; //post.title y body son los datos sacados del post
            nombre.textContent = post.body;
            correo.textContent = post.body;
            telefono.textContent = post.body;        
            lista.appendChild(nombre); 
            lista.appendChild(correo); 
            crearUl.appendChild(lista); 
        });

        
    }catch (error) { // manejo de error
        console.log(error);
    }
}

const datosUsuario = (() =>{
    const contenedor = document.getElementById("user-data");
    return{
        mostrar: async() =>{
            let response = await fetch("https://randomuser.me/api/?results=10");
            let datos = await response.json();
            // console.log(datos);
            const infoUsuario = datos.results.map(
                e =>
                `
                <div>
                    <img src="${e.picture.large}"/>
                    <p>${e.name.first} ${e.name.last}</p>
                    <p>${e.email}</p>
                    <p>${e.phone}</p>
                </div>`
            )
            contenedor.innerHTML = infoUsuario;
        }
    }
})();
datosUsuario.mostrar();