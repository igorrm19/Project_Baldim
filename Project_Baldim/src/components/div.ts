
export class DivComponent {
    elemento: HTMLDivElement

    constructor(style: string) {
        this.elemento = document.createElement('div')
        this.elemento.className = style
    }

    mount(container: HTMLElement) {
        container.appendChild(this.elemento.cloneNode(true))
    }


    // Método para adicionar/remover classes dinamicamente
    addClass(className: string) {
        this.elemento.classList.add(className)
    }


    removeClass(...className: string[]) {
        this.elemento.classList.remove(...className)
    }

    
    appenChild(child: HTMLElement){  //Adiciona elementos dentro do pai
        this.elemento.appendChild(child)
    }

}