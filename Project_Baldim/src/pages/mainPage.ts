import { TextHTML } from "../components/Text/text";
import { CardLogin } from "./cardLogin/card";

export class MainPage {
    container: HTMLDivElement;

    constructor() {
        this.container = document.createElement("div");
        this.container.className = "h-screen w-screen bg-gradient-to-r from-indigo-800 via-indigo-600 to-violet-600 flex items-center justify-center flex-col";
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.container);

        
        const div = new CardLogin() // cria uma div 
        div.setContext({
            h1_primaryText: "LabManager Pro",
            h3_segundoTexto: "Sistema de Gerenciamento de Laboratório",
            label_terceiroTexto: "Email",
            label_quartoTexto: "Senha",
            login: "OK"
        })
        div.montar(this.container) // monta na tela

    }


}

