$('.colors span, .sizes span').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.sizes i').click(function(){
  $('.sizes i:nth-of-type(2)').toggle()
})
