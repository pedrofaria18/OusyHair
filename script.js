const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++) {
  
  accordion[i].addEventListener("click", function(event) {
    var result = event.target.nextElementSibling;
    if (result.style.maxHeight) {
      result.style.maxHeight = null;
    } else {
      result.style.maxHeight = result.scrollHeight + "px";
    } 
  });
}