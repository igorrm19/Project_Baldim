
import '../src/style.css'
import { App } from './App/app';
import { MainPage } from './pages/mainPage';



document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector<HTMLElement>('#app')!
  if (!container) throw new Error("App não encontrado na dom")

  const app = new App(container) //inicialização

  const loader = document.createElement("p")
  loader.textContent = "carregando....."
  app.container.appendChild(loader)

  app.LoadElement(new MainPage())

})
