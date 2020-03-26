let links = document.querySelectorAll('.close');

links.forEach(function(link){
   link.addEventListener("click",function(ev){
         ev.preventDefault(); // evita que el evento siga su funcionamiento por defecto
      // return false;  // evita que el evento siga su funcionamiento por defecto
      let content = document.querySelector('.content');
      content.classList.remove("fadeInDown");
      content.classList.remove("animated");

      content.classList.add("fadeOutUp");
      content.classList.add("animated");

      // TIMERS 
      setTimeout(function(){ // setTimeOut le dice al programa cuanto debe esperar despues del click
         location.href = "../index.html" // direccina a la raiz del proyecto por ende a index.html
      },600)
      


      return false;
   })
})

// let iconos = document.querySelectorAll('i');

// iconos.forEach(function(icono){
//    icono.classList.remove() // clasList.remove() permite eliminar una clase de los elementos html seleccionados en este caso los elementos i
// })