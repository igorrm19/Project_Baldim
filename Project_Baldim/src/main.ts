import '../src/style.css'
import { FoxRouter } from '../fox/core/src/module/router/router';
import { MainPage } from './App/shared/pages/mainPage';
import { AboutPage } from './App/shared/pages/aboutPage';
import { teste } from './converto.stringforobject.teste';
import { html } from './App/shared/features/login/ui/cardLogin/card';
import { parseHTML } from '../fox/core/src/module/dom/parserDiv';
import { parseButton } from '../fox/core/src/module/dom/parseButton';


console.log(parseHTML(html))
console.log(parseButton(html))
teste()


const routes = {
  "/": MainPage,
  "/about": AboutPage,
};

document.addEventListener('DOMContentLoaded', () => {
  const router = new FoxRouter(routes);
  router.start();
});



