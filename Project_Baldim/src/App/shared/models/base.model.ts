
export class BaseModel {
    private html: string
    private elemento: HTMLElement
    private context: Record<string, any> = {}
    private Baldin: Record<string, any> = {}

    constructor(element: string, template: string) {
        this.elemento = document.createElement(element)
        this.html = template
    }

    private copileMotor(html: string): string {
        return html.replace(/{{\s*(.*?)\s*}}/g, (_, key) => {
            return this.context[key] ?? ""
        })
    }

    private copileFilho(html: string) :string{
       return html.replace(/<baldin\s+id="(.*?)"\s*><\/baldin>/g, (_,key) => {
          return this.Baldin[key] ?? ""
       })

    }

    private loaderTemplate() {
        let html = this.elemento.innerHTML = this.copileMotor(this.html)  // templete = ``
        html = this.copileFilho(html)
        this.elemento.innerHTML = html
    }


    public setContext(context: Record<string, any>) {
        this.context = {...this.context, ...context}
    }

    public setFilho(Baldin: Record<string, string>){
       return this.Baldin = {...this.Baldin, ...Baldin}
    }

    
    public getHTML() :string{
       let html = this.copileMotor(this.html)
       html = this.copileFilho(html)
       return html
    }


    public montar(parent: HTMLElement) {
        this.loaderTemplate() //monto o html
        parent.appendChild(this.elemento.cloneNode(true))
    }
}