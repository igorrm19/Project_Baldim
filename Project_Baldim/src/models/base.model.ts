
export class BaseModel {
    protected html: string
    protected elemento: HTMLElement
    protected context: Record<string, any> = {}

    constructor(element: string, template: string) {
        this.elemento = document.createElement(element)
        this.html = template
    }

    private copileMotor(html: string): string {
        return html.replace(/{{\s*(.*?)\s*}}/g, (_, key) => {
            return this.context[key] ?? ""
        })
    }

     private loaderTemplate() {
        this.elemento.innerHTML = this.copileMotor(this.html)  // templete = ``
    }


    public setContext(context: Record<string, any>) {
        this.context = context
    }

    public InserirFilho(filho: string): void {
        this.html = this.html.replace(/<\/baldin>/, `${filho}`)
    }

    public montar(parent: HTMLElement) {
        this.loaderTemplate() //monto o html
        parent.appendChild(this.elemento)
    }
}