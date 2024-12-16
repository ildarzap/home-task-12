const figure = document.querySelector('.figure');
const circleBtn = document.querySelector('#circle-btn');
const squareBtn = document.querySelector('#square-btn');
const ovalBtn = document.querySelector('#oval-btn');
const rectangleBtn = document.querySelector('#rectangle-btn');
const colorInput = document.querySelector('input[type="color"]');
const text = document.querySelector('.text');
const form = document.querySelector('form');
const textInput = document.querySelector('input[type="text"]');
const error = document.querySelector('.error');
const clearBtn = document.querySelector('#clear-btn');

const shapes = {
  circle: 'circle',
  square: 'square',
  oval: 'oval',
  rectangle: 'rectangle',
};

function setFigureShape(shapeClass) {
  Object.values(shapes).forEach((cls) => {
    figure.classList.toggle(cls, cls === shapeClass);
  });
}

circleBtn.addEventListener('click', () => setFigureShape(shapes.circle));
squareBtn.addEventListener('click', () => setFigureShape(shapes.square));
ovalBtn.addEventListener('click', () => setFigureShape(shapes.oval));
rectangleBtn.addEventListener('click', () => setFigureShape(shapes.rectangle));

colorInput.addEventListener('input', () => {
  figure.style.backgroundColor = colorInput.value;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let errorMessage = '';

  if (figure.classList.length < 2) {
    errorMessage = 'Выберите фигуру';
  } else if (!textInput.value) {
    errorMessage = 'Введите текст';
    textInput.style.border = '1px solid red';
  }

  error.textContent = errorMessage;
  if (errorMessage) {
    return;
  }

  textInput.style.border = 'none';
  text.textContent = textInput.value;
  textInput.value = '';
});

function clearForm() {
  figure.className = 'figure';
  figure.style.backgroundColor = '';
  text.textContent = '';
  textInput.value = '';
  textInput.style.border = 'none';
  error.textContent = '';
}

clearBtn.addEventListener('click', clearForm);
