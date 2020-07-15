let form = document.querySelector('.form-flex');
let formButton = document.querySelector('.button-form');
let map = document.querySelector('.map')

formButton.onclick = function() {
  form.classList.toggle('visually-hidden');
  map.classList.toggle('visually-hidden');
  form.classList.toggle('form-show')
};
