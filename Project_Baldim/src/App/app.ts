import '../style.css'


export class App{
    container: HTMLElement

    constructor(containerId: HTMLElement){
        this.container = containerId
    }


    LoadElement(page: {mount: (parent: HTMLElement) => void}){
      this.container.innerHTML = ""

      page.mount(this.container)
    }
}