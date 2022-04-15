const age=18;
$('.login button').click(function(){
  let age = $('#id').val()
  if(age == ''){
    alert('나이를 입력하세요.')
  }
  else if(age < 20){
    alert('미성년자입니다.')
  }
  else if(age >= 20){
    alert('성인입니다.')
  }
  else{
    alert('숫자를 입력하세요')
  }
})