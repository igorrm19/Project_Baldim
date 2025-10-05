import template from "./text.html?raw"
import { BaeModel } from "../../models/base.model"

export class TextHTML extends BaeModel{
  private context: Record<string, any> = {}

  constructor(){
    super("div", template)
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