//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//se oculta el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Aparición de nnombre y profesión
const name = document.querySelector('#name');
const message1 = 'YEISON WILDE';
let i1 = 0;
let interval1;

const developer = document.querySelector('#developer');
const message2 = 'DEVELOPER JUNIOR';
let i2 = 0;
let interval2;

function typeWriter1(callback) {
  if (i1 < message1.length) {
    name.textContent += message1.charAt(i1);
    i1++;
    interval1 = setTimeout(() => typeWriter1(callback), 150); // velocidad de escritura
  } else {
    callback(); // Llamar al callback cuando se haya terminado de escribir el texto del h1
  }
}

function typeWriter2() {
  if (i2 < message2.length) {
    developer.textContent += message2.charAt(i2);
    i2++;
    interval2 = setTimeout(typeWriter2, 100); // velocidad de escritura
  }
}

// Iniciar la escritura del texto del h1
typeWriter1(() => {
  // Cuando se ha terminado de escribir el texto del h1, iniciar la escritura del texto del h2
  typeWriter2();
});