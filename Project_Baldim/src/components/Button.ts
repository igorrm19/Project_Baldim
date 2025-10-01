// src/components/Button.ts
export class Button {
  element: HTMLButtonElement

  constructor(text: string, onClick?: () => void) {
    // Cria o elemento
    this.element = document.createElement('button')
    this.element.textContent = text
    this.element.className = "px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-semibold"

    // Adiciona o event listener se houver
    if (onClick) {
      this.element.addEventListener('click', onClick)
    }
  }

  // Método para anexar o botão a um container
  mount(container: HTMLElement) {
    container.appendChild(this.element)
  }

  // Método para alterar o texto depois
  setText(newText: string) {
    this.element.textContent = newText
  }

  // Método para adicionar/remover classes dinamicamente
  addClass(className: string) {
    this.element.classList.add(className)
  }

  removeClass(className: string) {
    this.element.classList.remove(className)
  }
}
