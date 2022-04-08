export class Modal {
  constructor(modalId, closeButton, visibleClass) {
    this.modal = document.querySelector(modalId);
    this.closeButton = document.querySelector(closeButton);
    this.visibleClass = visibleClass;
  }

  openModal() {
    this.modal.classList.add(this.visibleClass);

    const firstInput = this.modal.querySelector('input');
    firstInput.focus();

    document.body.style.overflow = 'hidden';
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });

    this.focusTrap();
  }

  setSaveButtonAttr(attr, value) {
    const button = this.modal.querySelector('.save-note');
    button.setAttribute(attr, value);
  }

  removeSaveButtonAttr(attr) {
    const button = this.modal.querySelector('.save-note');
    button.removeAttribute(attr);
  }

  clearInputs() {
    const textInputs = this.modal.querySelectorAll(
      'input[type="text"], textarea'
    );

    textInputs.forEach(textInput => textInput.value = '');
  }

  focusTrap() {
    const focusabilityElements = this.modal.querySelectorAll(
      'input, textarea, button'
    );
    const first = focusabilityElements[0];
    const last = focusabilityElements[focusabilityElements.length - 1];

    document.addEventListener('keydown', (event) => {
      if(event.key === 'Tab' && document.activeElement === last) {
        first.focus();
      }
    });
  }

  closeModal() {
    document.body.style.overflow = '';
    this.modal.classList.remove(this.visibleClass);
    this.removeSaveButtonAttr('data-id');
  }
}