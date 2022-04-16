$('.list li').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

   const h1 = $(this).text()
   const imgName = 'img/'+h1+'.png'
   $('.content #tab1 .text h1').text(h1)
   $('.content #tab1 img').attr('src',imgName)
})