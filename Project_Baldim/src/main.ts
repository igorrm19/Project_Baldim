
import '../src/style.css'
//import { App } from './App/app';
//import { MainPage } from './App/shared/pages/mainPage';
import { loadRoute } from './router';


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector<HTMLElement>('#app')!
  if (!container) throw new Error("App não encontrado na dom")

  window.addEventListener("DOMContentLoaded", () => {
    loadRoute(window.location.pathname);
  });

  // const app = new App(container) //inicialização

  // const loader = document.createElement("p")
  // loader.textContent = "carregando....."
  // app.container.appendChild(loader)

  // app.LoadElement(new MainPage())

});

