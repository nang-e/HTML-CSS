$('.testimonial-pic img').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  $('#' + $(this).attr('data-alt')).addClass('active')
  $('#' + $(this).attr('data-alt')).siblings().removeClass('active')
})