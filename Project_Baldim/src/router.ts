import { MainPage } from "./App/shared/pages/mainPage"

const routes: Record<string, any> = {
    '': MainPage
}

export class Router {
    container: HTMLElement

    constructor(container: HTMLElement) {
        this.container = container
     }

    handleRoute() {
        const hash = window.location.hash
        const Page = routes[hash] || MainPage
        this.container.innerHTML = ''
        new Page().mount(this.container)
    }
}