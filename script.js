const verseElement = document.getElementById('verse');
const emojis = document.getElementsByClassName('emoji');

const verses = [
  "Y cuando todo el mundo se iba",
  "y nos quedábamos los dos",
  "entre vasos vacíos y ceniceros sucios",
  "qué hermoso era saber que estabas",
  "ahí como un remanso",
  "sola conmigo al borde de la noche",
  "y que durabas, eras más que el tiempo",
  "eras la que no se iba",
  "porque una misma almohada",
  "y una misma tibieza",
  "iba a llamarnos otra vez",
  "a despertar al nuevo día",
  "•* juntos, riendo, despeinados *•"
  // Agrega más versos aquí
];

function showVerse(index) {
  verseElement.innerText = verses[index];
}