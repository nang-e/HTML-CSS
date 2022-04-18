$('.colors span, .sizes span').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.sizes i').click(function(){
  $(this).toggleClass('active')
})