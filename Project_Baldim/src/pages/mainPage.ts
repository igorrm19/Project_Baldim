import { Button } from '../components/Button'

export class MainPage{
    container: HTMLDivElement;

    constructor(){
        this.container = document.createElement("div");
        this.container.className = "p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100";
    }

    mount(parent: HTMLElement){
        parent.appendChild(this.container);

        const button = new Button("Click", () => {
            alert("butão clickado");
        });

        button.mount(this.container);
    }

}