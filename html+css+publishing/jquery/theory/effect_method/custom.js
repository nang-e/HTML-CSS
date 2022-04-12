// jquery 효과 메서드
// show(), hide(), toggle()

$('.content:nth-child(1) a:nth-child(1)').click(function(){
  $('.container .content:nth-child(1) div').show()
})
$('.content:nth-child(1) a:nth-child(2)').click(function(){
  $('.container .content:nth-child(1) div').hide()
})
$('.content:nth-child(1) a:nth-child(3)').click(function(){
  $('.container .content:nth-child(1) div').toggle()
})

// jquery 효과 메서드
// slideDown(),slideUp(),slideToggle()

$('.content:nth-child(2) a:nth-child(1)').click(function(){
  $('.container .content:nth-child(2) div').slideDown()
})
$('.content:nth-child(2) a:nth-child(2)').click(function(){
  $('.container .content:nth-child(2) div').slideUp()
})
$('.content:nth-child(2) a:nth-child(3)').click(function(){
  $('.container .content:nth-child(2) div').slideToggle()
})

// jquery 효과 메서드
// fadeIn(), fadeOut(), fadeToggle() : opacity가 연해지고 진해지는 느낌
// 괄호 안에 속도를 넣을 수 있음=> 따옴표 없어야하고 ms단위. 혹은 단어('fast','slow')
$('.content:nth-child(3) a:nth-child(1)').click(function(){
  $('.container .content:nth-child(3) div').fadeIn()
})
$('.content:nth-child(3) a:nth-child(2)').click(function(){
  $('.container .content:nth-child(3) div').fadeOut()
})
$('.content:nth-child(3) a:nth-child(3)').click(function(){
  $('.container .content:nth-child(3) div').fadeToggle(1000)
})