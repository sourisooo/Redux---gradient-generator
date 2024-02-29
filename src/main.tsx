// == Imports
import { randomHexColor, generateSpanColor } from './utils/color';
import store from './redux/store';
import './styles/index.scss';

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState().color;

  /*
    le `!` indique à TS que l'élément ne sera jamais `null`
    (à utiliser avec précaution)
  */
  document.querySelector('.nbColors')!.innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState().color;

  /*
    par défaut, `document.querySelector` retourne un type `Element`
    qui n'a pas de propriété `style` ;
    on spécifie qu'il s'agit d'un `HTMLElement` qui l'a.
  */
  document.querySelector<HTMLElement>('.gradient')!.style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState().color;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.querySelector('.colors')!.innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// --- Permet d'exécuter les fonctions de rendu, à chaque fois qu'un reducer fait l'objet d'un changement
store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll')!.addEventListener('click', () => {
  // debug
  console.log('Random all colors');
  // data
  store.dispatch({
    type: 'color/RANDOM_ALL',
  });
});

document.getElementById('randFirst')!.addEventListener('click', () => {
  // data
  store.dispatch({
    type: 'color/RANDOM_FIRST_COLOR',
  });
});

document.getElementById('randLast')!.addEventListener('click', () => {
  // data
  store.dispatch({
    type: 'color/RANDOM_LAST_COLOR',
  });
});

document.getElementById('toLeft')!.addEventListener('click', () => {
  // data
  store.dispatch({
    type: 'color/TO_LEFT',
  });
});

document.getElementById('toRight')!.addEventListener('click', () => {
  // data
  store.dispatch({
    type: 'color/TO_RIGHT',
  });
});

document.getElementById('to45')!.addEventListener('click', () => {
  // data
  store.dispatch({
    type: 'color/TO_ANY',
    payload: 45,
  });
});

document.getElementById('to135')!.addEventListener('click', () => {
  // data
  store.dispatch({
    type: 'color/TO_ANY',
    payload: 135,
  });
});


document.getElementById('to225')!.addEventListener('click', () => {
  // data
  store.dispatch({
    type: 'color/TO_ANY',
    payload: 225,
  });
});


document.getElementById('to315')!.addEventListener('click', () => {

  // data
  store.dispatch({
    type: 'color/TO_ANY',
    payload: 315,
  });
});

document.getElementById('torandom')!.addEventListener('click', () => {

  let random = Math.floor(Math.random() * 360);

  // data
  store.dispatch({
    type: 'color/TO_ANY',
    payload: random,
  });
});


