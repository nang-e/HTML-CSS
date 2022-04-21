imgLst = ['img/app-capture-01.png','img/app-capture-02.png','img/app-capture-03.png','img/app-capture-04.png']

$('.content').click(function(){
  $(this).toggleClass('active')
  $(this).children('a').toggleClass('active')
  const idx = $(this).index()

  $(this).siblings().removeClass('active')
  $(this).siblings().children('a').removeClass('active')
  $(this).parent().siblings('img').attr('src',imgLst[idx])
})