
export class BaseModel {
    private html: string
    private elemento: HTMLElement
    private context: Record<string, any> = {}
    private Machado: Record<string, string> = {}

    constructor(element: string, template: string) {
        this.elemento = document.createElement(element)
        this.html = template
    }

    private escapeHtml(text: string): string {
        if (typeof text !== 'string') return text;
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    private copileMotor(html: string): string {
        return html.replace(/{{\s*(.*?)\s*}}/g, (_, key) => {
            const value = this.context[key] ?? "";
            return this.escapeHtml(String(value));
        })
    }

    private copileFilho(html: string): string {
        return html.replace(/<Machado\s+id="(.*?)"\s*><\/Machado>/g, (_, key) => {
            return this.Machado[key] ?? ""
        })

    }

    private loaderTemplate() {
        let html = this.elemento.innerHTML = this.copileMotor(this.html)  // templete = ``
        html = this.copileFilho(html)
        this.elemento.innerHTML = html
    }


    public addProps(context: Record<string, any>) {
        this.context = { ...this.context, ...context }
    }

    public addComponente(Machado: Record<string, string>) {
        return this.Machado = { ...this.Machado, ...Machado }
    }


    public getHTML(): string {
        let html = this.copileMotor(this.html)
        html = this.copileFilho(html)
        return html
    }


    public montar(parent: HTMLElement) {
        this.loaderTemplate() //monto o html
        parent.appendChild(this.elemento.cloneNode(true))
    }
}