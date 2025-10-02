import template from "./card.html?raw"

export class CardLogin{
   public elmento: HTMLDivElement
   public html: string
 
    constructor(){
        this.elmento = document.createElement("div")
        this.html = template
    }


    public loaderTemplate(){
        this.elmento.innerHTML = this.html  // templete = ``
    }


    public InserirFilho(filho: string) :void{
      this.html = this.html.replace(/<\/div>/, `${filho}`)
    }


    public montar(parent: HTMLElement){
       this.loaderTemplate() //monto o html
       parent.appendChild(this.elmento.cloneNode(true))
      
    }

}
