const padlOrel = Math.random() < 0.5;

const result = document.querySelector('.vysledek');

const image = document.querySelector('.mince');
if (padlOrel) {
  result.textContent = 'Padl OREL';
  image.classList.add('mince--orel');
} else {
  result.textContent = 'Padl panna';
  image.classList.add('mince--panna');
}
