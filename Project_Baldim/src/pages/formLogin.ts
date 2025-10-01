import { Button } from "../components/Button"
import { InputComponent } from "../components/input"


export class FormLoginComponent{
    elemento: HTMLFormElement

    constructor(style: string){
       this.elemento = document.createElement("form")    
       this.elemento.className = style
       this.elemento.action = ""
    }

    mount(container: HTMLElement){
        container.appendChild(this.elemento)

        {
          const inputEmail = new InputComponent("mb-2 w-full px-7 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500", "email", "digiti seu email", "")
          inputEmail.mount(this.elemento)
        }

        {
          const inputSenha = new InputComponent("w-full px-7 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500", "password", "digiti sua senha", "")
          inputSenha.mount(this.elemento)
        }

        {
            const button = new Button("Cadraste-se", () => {
                alert("butão clickado");
            });

            button.mount(this.elemento);
        }
    }

    appendChild(child: HTMLElement){
        this.elemento.appendChild(child)
    }
}