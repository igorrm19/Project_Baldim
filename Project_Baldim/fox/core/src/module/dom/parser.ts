
export type ActionItem = {
    div: string | HTMLElement
}

export function parseHTML(html: string): Record<string, any> {
    //Uso do DOMParser para converter a string HTML em um documento HTML
    const parse = new DOMParser()
    const doc = parse.parseFromString(html, 'text/html')
    const divs = doc.querySelectorAll('div')

    //Uso de uma pilha para armazenar as views
    const pilha: ActionItem[] = []
    divs.forEach(div => {
        pilha.push({ div: div })
    })

    //Retorno do objeto com a view
    return {
        "DIV": {
            "ID": divs,
            "view": pilha[pilha.length], pilha
        }
    }
}
