import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { environmentsComponents } from './src/concepts/01-environments';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite Advanced!!!</h1>
    <div class="card">
      
    </div>

  </div>
`;

// Para manejar las variables de entorno aremos lo siguiente:
const element = document.querySelector('.card');

// console.log(`Hello Advanced`);
// Hacemos el llamado a la funcion "environmentsComponents" para el manejo de las variables de entorno.
environmentsComponents( element );