export class InputComponent {
    elemento: HTMLInputElement

    constructor(style: string, tipo: string, plashold: string, valor: string, onChange?: (e: Event) => void) {
        this.elemento = document.createElement("input")
        this.elemento.className = style
        this.elemento.type = tipo
        this.elemento.placeholder = plashold
        this.elemento.value = valor

        if (onChange) {
            this.elemento.addEventListener("input", onChange)
        }
    }


    mount(container: HTMLElement) {
        container.appendChild(this.elemento)

    }


   getValue() :string{
    return this.elemento.value
   }

   setValue(val: string){
    this.elemento.value = val
   }
}