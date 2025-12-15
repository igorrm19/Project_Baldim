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

    const funcoes: Function[] = []
    funcoes.push(on)

    // Problema: Não posso ultilizar o nome da função apenas encontrar todas as funções
    // Da forma como esta funciona porem o usuario teria que ativar push sempre que queresse execultar sua função
    function on() {
        alert("Deu certo")
    }

    function on2() {
        console.log('on2(), 1')
    }

    funcoes.push(on2)

    function on3() {
        console.log('on3(), 2')
    }

    funcoes.push(on3)

    console.log(funcoes)

    // comparar todas as funções encontradas com todas as funções do arquivo ts
    let n = 0
    pilha.forEach(fun => {
        if (fun.onClick === funcoes[n].name + '()') {
            funcoes[n]()
        } else {
            n++
        }
    });

    // Retorno do objeto com a view
    // Problema: construir um obejeto conforme as tags são encontradas
    return pilha
}


// Missão: Armazenar todas as funções de um arquivo ts dentro de um array e comparala com todas as funções encontradas no html

/*

  Resultado final: 
  1 -  O usuario cria uma função referente ao onClick do botão e armazena com push
  2 -  Se a função existir no arquivo ts, ela será execultada
  3 -  Se a função não existir no arquivo ts, ela não será execultada

*/