
import { CardLogin } from "../features/login/ui/cardLogin/card";

export class MainPage {
    container: HTMLDivElement;

    constructor() {
        this.container = document.createElement("div");
        this.container.className = "h-screen w-screen bg-gradient-to-br from-neutral-950 via-orange-800 to-orange-600 flex items-center justify-center flex-col";
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.container);


        const div = new CardLogin() // cria uma div 
        const loginHTML = div.mountCardLogin(this.container)
        div.addComponente({
            primary_component: loginHTML,
        })
        div.montar(this.container) // monta na tela
    }

}

