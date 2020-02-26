var btn = document.getElementById('dropbtn');
const links = document.querySelectorAll('.link');
let request;

btn.addEventListener('click', function(){
  requestAnimationFrame(performAnimation)
});

const performAnimation = () => {
 
  if($('#dropbtn').hasClass('fadeIn')){
    fadeIn();
    $('#dropbtn').removeClass('fadeIn').addClass('fadeOut');
    
  }else{
    fadeOut();
    $('#dropbtn').removeClass('fadeOut').addClass('fadeIn');
    
  }
}

function fadeIn() {
  for(var i = links.length; i >= 0 ; i--){
    task(i)
  }
  function task(i) { 
    setTimeout(function() { 
      $(".link").eq(i).removeClass('fade-out').addClass('fade-in');
    }, 200 * i );
 }
}

function fadeOut() {
  for(var i = 0; i < links.length; i++){
    task(i)
  }
  function task(i) { 
    setTimeout(function() { 
      var $links = $(".link").get().reverse();
      $($links).eq(i).removeClass('fade-in').addClass('fade-out');
    }, 200 * i );
}
}

// cancelAnimationFrame(request)
// // Math.floor(Date.now() / 1000)
// let request

// const performAnimation = () => {
//   request = requestAnimationFrame(performAnimation)
//   //animate something
// }

// requestAnimationFrame(performAnimation)

// //...

// cancelAnimationFrame(request) 
//stop the animation
//doh