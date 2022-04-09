import fillModalWithData from "./fillModalWithData";

const editNote = (buttonClass, notesList, modal) => {
  document.addEventListener('click', (event) => {
    const clickedBtn = event.target.closest(buttonClass);
    if(clickedBtn) {
      const classList = [
        '.note-popup__title',
        '.note-popup__content',
        '.note-category-input'
      ];

      const currentNote = notesList.find(
        note => note.id === parseInt(clickedBtn.dataset.id)
      );

      fillModalWithData(...classList, currentNote);

      modal.openModal();
      modal.setSaveButtonAttr('data-id', currentNote.id);
    }
  });
}

export default editNote;