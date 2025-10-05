
import template from "./login.html?raw"
import { ContrutorLogin } from "./construtorLogin"
import { TextHTML } from "../../../../components/Text/text"

// responsavel por implementar outros componentes

export class Login extends ContrutorLogin {
    containerLogin: HTMLElement

    constructor() {
        super("form", template)
        this.containerLogin = document.createElement("div")
    }

    mountLogin(parent: HTMLElement) {
        parent.appendChild(this.containerLogin.cloneNode(true))

        const text = new TextHTML()
        text.addProps({
            texto: ""
        })

        this.addComponente({
            par: text.getHTML()
        })

        text.montar(this.containerLogin)
    }

}

