
import { Text } from '../components/text';
import { CardForm } from '../components/geral';
import { DivComponent } from '../components/div';
import { FormLoginComponent } from './formLogin';

export class MainPage {
    container: HTMLDivElement;

    constructor() {
        this.container = document.createElement("div");
        this.container.className = "h-screen w-screen bg-gradient-to-r from-indigo-800 via-indigo-600 to-violet-600 flex items-center justify-center flex-col";
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.container);

        {
            var div = new CardForm()  //card de formulario
            div.mount(this.container)

            {
                var divText = new DivComponent("")
                divText.mount(this.container)  //div dentro do card de formulario
                div.appenChild(divText.elemento)

                {
                    const h1 = new Text("")
                    h1.mount(this.container)
                    h1.addHTML(`<h1 class="text-cyan-700 top-0 font-bold text-3xl" >Realizar cadrasto</h1>`)
                    divText.appenChild(h1.elemento)
                }
            }

            {
                var divForm = new DivComponent("")
                divForm.mount(this.container)  //div dentro do card de formulario
                div.appenChild(divForm.elemento)

                {
                    var form = new FormLoginComponent("w-[100%] h-[100%] space-y-5 w-[55vh] flex items-center justify-center flex-col")
                    form.mount(this.container)
                    divForm.appenChild(form.elemento)
                }

            }


        }





    }


}