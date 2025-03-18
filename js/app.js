// Arreglo para almacenar la lista de amigos
let amigos = [];

/**
 * Función para agregar un nombre a la lista de amigos
 */
function agregarAmigo() {
  const amigoInput = document.getElementById('amigo');
  const nombreAmigo = amigoInput.value.trim();

  // Verifica que el campo no esté vacío
  if (nombreAmigo !== '') {
    amigos.push(nombreAmigo);
    mostrarAmigos();       // Muestra la lista actualizada en pantalla
    amigoInput.value = ''; // Limpia el campo de texto
  } else {
    alert('Por favor, ingrese un nombre antes de añadir.');
  }
}

/**
 * Función para actualizar la lista de amigos en el DOM
 */
function mostrarAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpia la lista actual

  // Crea un elemento <li> por cada amigo en el arreglo
  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

/**
 * Función para sortear un amigo aleatoriamente
 */
function sortearAmigo() {
  // Se requiere al menos 2 amigos en la lista
  if (amigos.length < 2) {
    alert('Debes agregar al menos 2 nombres para realizar un sorteo válido.');
    return;
  }

  // Obtiene un índice aleatorio en el arreglo "amigos"
  const randomIndex = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[randomIndex];

  // Muestra el resultado en la sección "resultado"
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = 'El amigo secreto es: ' + amigoSorteado;
}
