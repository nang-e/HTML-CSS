// Trigger
$('.menu-bar').click(function(){
  $(this).children('span').toggleClass('active')
  $('.menu').fadeToggle()
})

// Audio Controls
const bgm = document.querySelector('audio')
bgm.volume = .2;  // Audio Volume 0~1