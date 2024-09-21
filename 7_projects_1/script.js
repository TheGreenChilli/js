const buttons  = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) { 
    console.log(e)
    console.log(e.target);
    if (e.target.id === 'pink') {
      body.style.backgroundColor = 'rgb(232, 197, 229)';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = 'rgb(192, 235, 166)';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'rgb(252, 205, 42)';
    }
  });
});