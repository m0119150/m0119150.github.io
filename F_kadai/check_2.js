function checkAge() {
  let ageElement =document.querySelector('#age');
  let answerElement =document.querySelector('#answer');
 let age =Number(ageElement.value);
 if (age <= 0){
   answerElement.innerHTML='エラー';
 }else if (age <20){
   answerElement.innerHTML='未成年';
 } else if (age <65){
  answerElement.innerHTML='成人';
}else {
  answerElement.innerHTML='高齢者';
}
}

function checkYear() {
  let yearElement =document.querySelector('#year');
  let answerElement =document.querySelector('#answer');
  let year =Number(yearElement.value);
  if (year%4 === 0 ||(year%100!== 0 && year%4 === 0)){
    answerElement.innerHTML='閏年';
  }
  else {
    answerElement.innerHTML='平年';
  }
}