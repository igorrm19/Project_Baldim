import { Button } from '../components/Button'
import { Text } from '../components/text';
import { ComponentGeral } from '../components/geral';

export class MainPage {
    container: HTMLDivElement;

    constructor() {
        this.container = document.createElement("div");
        this.container.className = "p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100";
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.container);

        {
            var div = new ComponentGeral()
            div.mount(this.container)
        }

         {
            const h1 = new Text("Realizar cadrasto")
            h1.mount(this.container)
            h1.addHTML(`<h1 class="text-white top-0 font-bold text-3xl" >Realizar cadrasto</h1>`)
            div.appenChild(h1.elemento)
        }


        {
            const button = new Button("Cadraste-se", () => {
                alert("butão clickado");
            });

            button.mount(this.container);
            div.appenChild(button.element)
        }

       
    }


}