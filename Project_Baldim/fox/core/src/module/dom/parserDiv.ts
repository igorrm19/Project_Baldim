// 

export type ActionItem = {
    div: string | HTMLElement
    id: string
    class: string
    style: string | HTMLElement | any
    children: string | HTMLElement | any
    parent: string | HTMLElement | any
}

export function parseHTML(html: string): Record<string, any> {
    // Uso do DOMParser para converter a string HTML em um documento HTML
    const parse = new DOMParser()
    const doc = parse.parseFromString(html, 'text/html')
    const divs = doc.querySelectorAll('div')

    // Uso de uma pilha para armazenar as views
    const pilha: ActionItem[] = []
    divs.forEach(div => {
        pilha.push(
            {
                div: div,
                id: div.id,
                class: div.className,
                style: div.style,
                children: div.children,
                parent: div.parentElement
            })
    })

    // Retorno do objeto com a view
    // Problema: construir um obejeto conforme as tags são encontradas
    return pilha
}

