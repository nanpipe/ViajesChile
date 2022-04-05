 // Enables the Tooltip
 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
 
 
 // Creates the animation to do a smooth scroll from all sections

 const links = document.querySelectorAll("ul.navbar-nav li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// I created a button to return to the top of the screen and hide the nav bar once you have scrolled over 100px

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('nav').css({'display': 'none'});
      $('#subir-up').css({'display': 'block'});
      
    }
    else{
        $('nav').css({'display': 'block'});
        $('#subir-up').css({'display': 'none'});
    }
  });

