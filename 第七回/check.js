function checkNumber() {
  let aa =Number(document.querySelector('#num').value);
  if(aa>10){
    window.alert('true');
  } else {
    window.alert('false');
  }
}

function checkUserInput() {
  let aa =document.querySelector('#user_input');
  let bb =document.querySelector('#answe')
  if(aa == '隣の客はよく柿食う客だ。'){
    bb.innerHTML =('<p>正解</p>');
  } else {
    bb.innerHTML =('<p>不正解</p>');
  }
}