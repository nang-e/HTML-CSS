const imgLst = ['img/portrait-01.jpg','img/portrait-02.jpg','img/portrait-03.jpg','img/portrait-04.jpg']

$('.menus li').mouseenter(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
  const idx = $(this).index()

  $(this).parent().parent().parent().css({
    'background-image': 'url('+imgLst[idx]+')'
  })
})
$('.menus li').mouseleave(function(){
  $(this).removeClass('active')
  $(this).parent().parent().parent().css({
    'background-image': 'url(img/portrait-initial.jpg)'
  })
})