import '../src/style.css'
import { FoxRouter } from '../fox/core/src/module/router/router';
import { MainPage } from './App/shared/pages/mainPage';
import { AboutPage } from './App/shared/pages/aboutPage';
import { teste } from './converto.stringforobject.teste';
import { html } from './App/shared/features/login/ui/cardLogin/card';

export type ActionItem = {
  div: string | any
}

function testeTween(html: string): Record<string, any> {

  //Uso do DOMParser para converter a string HTML em um documento HTML
  const parse = new DOMParser()
  const doc = parse.parseFromString(html, 'text/html')
  const div = doc.querySelector('div')

  //Uso de uma pilha para armazenar as views
  const pilha: ActionItem[] = []
  const view = pilha.push({ div: div })

  //Retorno do objeto com a view
  return {
    "DIV": {
      "ID": div,
      "view": pilha[view - 1]
    }
  }
}

console.log(testeTween(html))
teste()



const routes = {
  "/": MainPage,
  "/about": AboutPage,
};

document.addEventListener('DOMContentLoaded', () => {
  const router = new FoxRouter(routes);
  router.start();
});



