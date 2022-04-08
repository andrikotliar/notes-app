export class Modal {
  constructor(modalId, closeButton, visibleClass) {
    this.modal = document.querySelector(modalId);
    this.closeButton = document.querySelector(closeButton);
    this.visibleClass = visibleClass;
  }

  openModal(mode) {
    this.modal.classList.add(this.visibleClass);

    const firstInput = this.modal.querySelector('input');
    firstInput.focus();

    document.body.style.overflow = 'hidden';
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });

    this.setSaveButtonID(mode);
    this.focusTrap();
  }

  setSaveButtonID(mode) {
    const saveButton = this.modal.querySelector('.save-note');
    if(mode === 'update') {
      saveButton.id = 'update-note';
    } else {
      saveButton.id = 'save-note';
    }
  }

  clearInputs() {
    const textInputs = this.modal.querySelectorAll(
      'input[type="text"], textarea'
    );

    const radios = this.modal.querySelectorAll('input[type="radio"]');

    textInputs.forEach(textInput => textInput.value = '');
    radios.forEach(radioInput => radioInput.checked = false);
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
  }
}