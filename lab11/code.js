function sum(){
  var a = parseInt(document.getElementById('a').value)
  var answer = document.getElementById('answer')
  let i = a+1;
  let sum = a
  while (i <= 100) { // выводит 0, затем 1, затем 2
    sum+=i;
    i++;
  }

  answer.innerHTML= "<br>Ответ: "+sum}