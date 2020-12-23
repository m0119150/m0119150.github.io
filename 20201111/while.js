function doLoop1() {
  let answerElement = document.querySelector('#answer')
  let summary =0;
  let i =0;
  while (i <=10000){
    summary =summary+i;
    i++;
  }
  answerElement.innerHTML =summary;
}

function doLoop2() {
  let answerElement = document.querySelector('#answer')
  let summary =0;
  let i =0;
  while (i <=10000){
    summary =summary+i;
    if (summary >50000){
      break;
    }
    i++;
  }
  answerElement.innerHTML =summary;

}

function doFizzBuzz() {
  let answerElement = document.querySelector('#answer')
  let summary =1;
  while (summary <=100){

    let message ='';
    if (summary%3 ===0 && summary%5 ===0){
    message='FizzBuzz';
    }
    else if (summary%5 ===0){
      message='Buzz';
    }else if (summary%3 ===0){
      message='Fizz';
    }
    else {
     message=summary;
    }
    answerElement.innerHTML=answerElement.innerHTML+summary+'<br>'
    summary++;
  }
}