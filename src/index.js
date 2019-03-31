import './mathCalc.js';
import './spec/tests';

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Custom tests result in console'
  return element;
}
document.body.appendChild(component());