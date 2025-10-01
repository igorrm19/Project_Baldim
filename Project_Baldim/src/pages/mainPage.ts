import { Button } from '../components/Button'
import { Text } from '../components/text';
import { CardForm } from '../components/geral';
import { DivComponent } from '../components/div';

export class MainPage {
    container: HTMLDivElement;

    constructor() {
        this.container = document.createElement("div");
        this.container.className = "p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100";
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.container);

        {
            var div = new CardForm()
            div.mount(this.container)
        }

         {
            const h1 = new Text("")
            h1.mount(this.container)
            h1.addHTML(`<h1 class="text-white top-0 font-bold text-3xl" >Realizar cadrasto</h1>`)
            div.appenChild(h1.elemento)
        }


        {
            var divForm = new DivComponent("bg-red-300 w-[80%] h-[70%] flex items-center justify-center")
            divForm.mount(this.container)
            div.appenChild(divForm.elemento)
        }

        {
            const button = new Button("Cadraste-se", () => {
                alert("butão clickado");
            });

            button.mount(this.container);
            divForm.appenChild(button.element)
        }


       
    }


}