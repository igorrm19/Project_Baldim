export type ActionItem = {
    button: string | HTMLElement
    id: string
    class: string
    style: string | HTMLElement | any
    children: string | HTMLElement | any
    parent: string | HTMLElement | any
    onClick: string | Function | any
    text: string | null
}

export function parseButton(html: string): Record<string, any> {
    // Uso do DOMParser para converter a string HTML em um documento HTML
    const parse = new DOMParser()
    const doc = parse.parseFromString(html, 'text/html')
    const buttons = doc.querySelectorAll('button')

    // Uso de uma pilha para armazenar as views
    const pilha: ActionItem[] = []
    buttons.forEach(button => {

        pilha.push(
            {
                button: button,
                id: button.id,
                class: button.className,
                style: button.style,
                children: button.children,
                parent: button.parentElement,
                onClick: button.getAttribute('onclick'),
                text: button.textContent

            })
    })

    const funcoes = []
    funcoes.push(on)

    console.log(funcoes[0].name)
    // Problema: Não posso ultilizar o nome da função apenas encontrar todas as funções
    function on() {
        console.log('on(), 0')
    }

    pilha.forEach(fun => {
        if (fun.onClick === on.name + "()") {
            on()
        } else {
            console.log(on.name, 1)
        }
    });

    // Retorno do objeto com a view
    // Problema: construir um obejeto conforme as tags são encontradas
    return pilha
}


// Missão: Armazenar todas as funções de um arquivo ts dentro de um array e comparala com todas as funções encontradas no html