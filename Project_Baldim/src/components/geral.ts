
export class CardForm {
    elemento: HTMLDivElement

    constructor() {
        this.elemento = document.createElement('div')
        this.elemento.className = "bg-slate-50 rounded-2xl shadow-2xl p-8 h-[85vh] w-[65vh] mx-auto flex flex-col items-center justify-start mt-10"
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