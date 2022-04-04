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



/*
$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
    window.location.hash = hash;
    });
    }
    });
    });
*/
    