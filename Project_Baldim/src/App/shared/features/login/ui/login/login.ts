
import template from "./login.html?raw"
import { ContrutorLogin } from "./construtorLogin"

// responsavel por implementar outros componentes

export class Login extends ContrutorLogin{

    constructor() {
       super("form", template) 
   }

}

