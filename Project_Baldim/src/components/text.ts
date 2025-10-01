
export class Text {
    elemento: HTMLParagraphElement
    ola: string = "ola mundo"

    constructor(text: string) {
        this.elemento = document.createElement('p')
        this.elemento.textContent = text
        this.elemento.className = "text-lg text-gray-800 font-bold"
        //this.elemento.innerHTML = `<span>${this.ola}</span>`
    }

    mount(container: HTMLElement) {
        container.appendChild(this.elemento)
    }

    setText(novoText: string) {
        this.elemento.textContent = novoText
    }


    // Método para adicionar/remover classes dinamicamente
    addClass(className: string) {
        this.elemento.classList.add(className)
    }

    removeClass(className: string) {
        this.elemento.classList.remove(className)
    }

    addHTML(HTML: string){
      this.elemento.innerHTML = `${HTML}`
    }
}