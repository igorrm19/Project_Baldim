import template from "./text.html?raw"

export class TextHTML{
  public elemento: HTMLElement
  private context: Record<string, any> = {}

  constructor(){
    this.elemento = document.createElement("div")
  }

  public setContext(context: Record<string, any>){
    this.context = context
  }

  private copileMotor(html: string) :string{
     return html.replace(/{{\s*(.*?)\s*}}/g, (_, key) => {
      return this.context[key] ??""
     })
  }

  public loadTemplete() :void{

    this.elemento.innerHTML = this.copileMotor(template)

  }

  public mount(parent: HTMLElement) :void{
    this.loadTemplete()
    parent.appendChild(this.elemento)
  }

}