import { worker } from './mocks/browser.js';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'hello world!';

  return element;
}

document.body.appendChild(component());

if (process.env.NODE_ENV === 'development') {
  worker.start();
}
