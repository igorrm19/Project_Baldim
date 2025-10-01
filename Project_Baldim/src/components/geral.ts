
export class ComponentGeral {
    elemento: HTMLDivElement

    constructor() {
        this.elemento = document.createElement('div')
        this.elemento.className = "bg-gray-500 w-[30%] h-[75vh] flex items-center justify-center flex-col"
    }

    mount(container: HTMLElement) {
        container.appendChild(this.elemento)
    }


    // Método para adicionar/remover classes dinamicamente
    addClass(className: string) {
        this.elemento.classList.add(className)
    }

    removeClass(...className: string[]) {
        this.elemento.classList.remove(...className)
    }

    appenChild(child: HTMLElement){
        this.elemento.appendChild(child)
    }

}