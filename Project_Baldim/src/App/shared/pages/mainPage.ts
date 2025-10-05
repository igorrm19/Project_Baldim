
import { CardLogin } from "../features/login/ui/cardLogin/card";

export class MainPage {
    container: HTMLDivElement;

    constructor() {
        this.container = document.createElement("div");
        this.container.className = "h-screen w-screen bg-gradient-to-r from-indigo-800 via-indigo-600 to-violet-600 flex items-center justify-center flex-col";
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.container);

        const div = new CardLogin() // cria uma div 
        const loginHTML = div.mountCardLogin(this.container)
        div.setFilho({
            baldin: loginHTML,
        })
        div.montar(this.container) // monta na tela

    }

}

