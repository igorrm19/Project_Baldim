import template from "./card.html?raw"

export class CardLogin {
    public elmento: HTMLDivElement
    private context: Record<string, any> = {}
    public html: string

    constructor() {
        this.elmento = document.createElement("div")
        this.html = template
    }

    private copileMotor(html: string): string {
        return html.replace(/{{\s*(.*?)\s*}}/g, (_, key) => {
            return this.context[key] ?? ""
        })
    }


    private loaderTemplate() {
        this.elmento.innerHTML = this.copileMotor(this.html)  // templete = ``
    }


    public InserirFilho(filho: string): void {
        this.html = this.html.replace(/<\/div>/, `${filho}`)
    }


    public montar(parent: HTMLElement) {
        this.loaderTemplate() //monto o html
        parent.appendChild(this.elmento.cloneNode(true))

    }

    public setContext(context: Record<string, any>) {
        this.context = context
    }

}
