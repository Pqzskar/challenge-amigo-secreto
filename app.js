// Declaramos un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminamos espacios en blanco al inicio y final
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte el nombre de un amigo.");
        return;
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    // Actualizar la lista de amigos en la interfaz
    actualizarLista();
    
    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    // Obtener el elemento UL donde se mostrará la lista
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de agregar nuevos elementos para evitar duplicados
    lista.innerHTML = "";
    
    // Recorrer el array de amigos y agregar cada uno como un elemento <li>
    amigos.forEach(nombre => {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = nombre; // Asignar el nombre del amigo al elemento
        lista.appendChild(li); // Agregar el <li> a la lista UL
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista antes de sortear
    if (amigos.length === 0) {
        alert("No tienes ningun amigo en la lista para sortear.");
        return;
    }
    
    // Generar un índice aleatorio dentro del rango del array amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];
                
    // Mostrar el resultado en la interfaz actualizando el contenido del <ul>
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}
        
    