// src/components/Button.ts
export class Button {
  element: HTMLButtonElement

  constructor(text: string, onClick?: () => void) {
    // Cria o elemento
    this.element = document.createElement('button')
    this.element.textContent = text
    this.element.className = "pflex items-center justify-center w-full bg-gray-900 text-white py-4 px-4 rounded-lg hover:bg-blue-700 transition"

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
