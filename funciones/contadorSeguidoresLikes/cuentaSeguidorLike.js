let count = 0; //inicia contador en 0

function increaseCount() {
    count++;
    displayCount(); //muestra el conteo via llamada a la funcion que muestra el conteo
    checkCountValue(); //se activará si contador llega a tal numero
}

function displayCount(){
document.getElementById('countDisplay').innerHTML=count;
}

//alerta si contador alcanza determinada cantidad
function checkCountValue() {
  if (count === 10) {
    alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
  } else if (count === 20) {
    alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
  }
}