$('.container a:nth-child(1)').click(function(){
  $('.container div').addClass('active')
})
$('.container a:nth-child(2)').click(function(){
  $('.container div').removeClass('active')
})
$('.container a:nth-child(3)').click(function(){
  $('.container div').toggleClass('active')
})