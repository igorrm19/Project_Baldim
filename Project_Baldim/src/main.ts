
import '../src/style.css'
import { App } from './App/app';
import { MainPage } from './App/shared/pages/mainPage';
import { Router } from './router';


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector<HTMLElement>('#app')!
  if (!container) throw new Error("App não encontrado na dom")

  const rota = new Router(container) //inicializar rotas
  rota.handleRoute()
  
  const app = new App(container) //inicialização

  const loader = document.createElement("p")
  loader.textContent = "carregando....."
  app.container.appendChild(loader)

  app.LoadElement(new MainPage())

})

