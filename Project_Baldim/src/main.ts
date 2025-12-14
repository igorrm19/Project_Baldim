import '../src/style.css'
import { FoxRouter } from '../fox/core/src/module/router/router';
import { MainPage } from './App/shared/pages/mainPage';
import { AboutPage } from './App/shared/pages/aboutPage';
import { teste } from './converto.stringforobject.teste';
import type { Template } from './App/shared/features/login/ui/cardLogin/card';


function testeTween(htmlString: string): Record<string, any> {
  return {
    "DIV": {
      "ID": 1
    }
  }
}

const template: Template = {
  template: ""
}

testeTween(template.template)
teste()


const routes = {
  "/": MainPage,
  "/about": AboutPage,
};

document.addEventListener('DOMContentLoaded', () => {
  const router = new FoxRouter(routes);
  router.start();
});



