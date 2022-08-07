import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { name, edad } from "./bases/01-types";
// import { pokemon, pokemonIds } from './bases/02-object';
import { charmander } from './bases/04-injection';
// import { charmander } from './bases/03-clases';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript ${name}</h1>
    <h1>Mi nombre es: ${name} -  Mi edad es ${edad}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Hello ${charmander}
    </p>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
