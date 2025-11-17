// router.ts

import { MainPage } from "./App/shared/pages/mainPage";
import { AboutPage } from "./App/shared/pages/aboutPage";


interface Page {
  mount(parent: HTMLElement): void;
}

type PageClass = new () => Page;

const routes: Record<string, PageClass> = {
  "/": MainPage,       // ← a linha que você queria mudar
    "/about": AboutPage,
};

export function navigate(path: string) {
  history.pushState({}, "", path);
  loadRoute(path);
}

export function loadRoute(path: string) {
  const PageCtor = routes[path] || routes["/"];
  const instance = new PageCtor();

  const container = document.querySelector("#app") as HTMLElement | null;
  if (!container) throw new Error("#app não encontrado no DOM");

  container.innerHTML = "";
  instance.mount(container);
}

window.addEventListener("popstate", () => loadRoute(window.location.pathname));
