import '../style.css'
// document.querySelector<HTMLDivElement>('#main')!.innerHTML = `
//  <h1 class="text-red-900">Hello word</h1>
// `


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