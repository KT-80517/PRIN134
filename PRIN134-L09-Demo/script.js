const instructions = document.querySelectorAll('.instructions li');
const ingredients = document.querySelectorAll('.ingredients li');
const cake = document.querySelector('#cake');
const btnHighlight = document.querySelector('#btn-highlight');
const btnCheckInstructions = document.querySelector('#btn-chk-instr');
const btnResetInstructions = document.querySelector('#btn-rst-instr');
const headers = document.querySelector('.headers');
const header = document.querySelector('.header');

console.log(instructions);
instructions.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('is-done');
    });
});

btnHighlight.addEventListener("click", () => {
    ingredients.forEach((item, index) => {
      if (index % 2 === 0) {
        item.classList.toggle("highlight");
      }
    });
  });

  btnCheckInstructions.addEventListener('click', ()=> {
    instructions.forEach(element => {
    element.classList.add('is-done');
     },3000);
});

btnResetInstructions.addEventListener('click', ()=> {
    instructions.forEach(element => {
    element.classList.remove('is-done');
     });
});

  cake.addEventListener('click', () => {
    cake.classList.add('animate__animated', 'animate__rubberBand');
    cake.addEventListener('animationend', () => {
        cake.classList.remove('animate__animated', 'animate__rubberBand');
      });
});

headers.addEventListener('click', () => {
    headers.classList.add('animate__animated', 'animate__flip');
    headers.addEventListener('animationend', () => {
        headers.classList.remove('animate__animated', 'animate__flip');
      });
});

header.addEventListener('click', () => {
    header.classList.add('animate__animated', 'animate__flip');
    header.addEventListener('animationend', () => {
        header.classList.remove('animate__animated', 'animate__flip');
      });
});

