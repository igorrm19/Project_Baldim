
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
        parent.appendChild(this.containerCardLogin.cloneNode(true))

        const login = new Login()
        login.setContext({
            h1_primaryText: "Titulo do formulario",
            h3_segundoTexto: "Subtitulo",
            label_terceiroTexto: "Email",
            label_quartoTexto: "Senha",
        })
        

        const loginHTML = login.getHTML()

        this.containerCardLogin.innerHTML = loginHTML


        return loginHTML
    }


}

