const textLst = ['매우 아쉬워요 🤬','아쉬워요 😖','괜찮아요 😗','좋아요 🙂','아주 좋아요 😍']

$('.star i').click(function(){
  $(this).addClass('active')
  $(this).prevAll().addClass('active')
  $(this).nextAll().removeClass('active')

  const idx = $(this).index()
  $('.text').text(textLst[idx])
})

