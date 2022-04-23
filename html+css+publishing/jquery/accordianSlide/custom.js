const imgLst = ['app-capture-01','app-capture-02','app-capture-03','app-capture-04']
$('.accordian a').click(function(){
  $(this).toggleClass('active')
  $(this).siblings('div').slideToggle()
  $(this).parent().siblings().children('a').removeClass('active')
  $(this).parent().siblings().children('div').slideUp()

  const idx = $(this).parent().index()
  $(this).parent().siblings('img').attr('src','img/'+imgLst[idx]+'.png')
})