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

        const text = new TextHTML()
        text.setContext({
            texto: "deu certo" //escreve o texto dentro da div
        })
        text.mount(this.container)
        const textString :string = text.elemento.outerHTML // converte para string

        const div = new CardLogin() // cria uma div 
        div.InserirFilho(textString) // adiciona um componente dentro da div
        div.montar(this.container) // monta na tela


    }


}

