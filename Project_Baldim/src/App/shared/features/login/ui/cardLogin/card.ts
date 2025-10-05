
import template from "./card.html?raw"
import { ContrutorCardLogin } from "./construtor"
import { Login } from "../login/login"

// responsavel por implementar outros componentes

export class CardLogin extends ContrutorCardLogin {
    containerCardLogin: HTMLElement

    constructor() {
        super("div", template)
        this.containerCardLogin = document.createElement("div")
    }

    mountCardLogin(parent: HTMLElement): string {
        parent.appendChild(this.containerCardLogin)

        const login = new Login()

        login.addProps({
            h1_primaryText: "Titulo do formulario",
            h3_segundoTexto: "Subtitulo",
            label_terceiroTexto: "Email",
            label_quartoTexto: "Senha",
        })

        login.mountLogin(this.containerCardLogin)
        

        const loginHTML = login.getHTML()

        return loginHTML
    }


}

