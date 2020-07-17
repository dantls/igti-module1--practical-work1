  var valorR = 0;
  var valorG = 0;
  var valorB = 0;
  var valorRGB = ``;

var r = document.querySelector('#rInput');
var g = document.querySelector('#gInput');
var b = document.querySelector('#bInput');
var rInput = document.querySelector('#textRInput');
var gInput = document.querySelector('#textGInput');
var bInput = document.querySelector('#textBInput');

rInput.value = 0;
gInput.value = 0; 
bInput.value = 0;

r.addEventListener('change',altera);
g.addEventListener('change',altera);
b.addEventListener('change',altera);

function altera(event){
  
  switch (event.srcElement.id) {
    case 'rInput': 
      valorR =`${event.target.value}`;
      rInput.value = event.target.value;

    break;
    case 'gInput':
      valorG =`${event.target.value}`
      gInput.value = event.target.value;
    break;
    case 'bInput':
      valorB =`${event.target.value}`
      bInput.value = event.target.value;
    break;
    
  }

  valorRGB = `${valorR},${valorG},${valorB}`
  resultado = document.querySelector('#resultado');
  resultado.style.backgroundColor = `rgb(${valorRGB})`;
}