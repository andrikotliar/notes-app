import updateNotesList from "./updateNotesList";
import saveEditedNote from "./saveEditedNote";
import renderTable from "./renderTable";
import renderStatistic from "./renderStatistic";

const saveNote = (saveButtonId, notes, modal) => {
  const saveButton = document.querySelector(saveButtonId);
  const classList = [
    '.note-popup__title',
    '.note-popup__content',
    '.note-category-input'
  ];

  saveButton.addEventListener('click', () => {
    if(saveButton.hasAttribute('data-id')) {
      const id = saveButton.dataset.id;
      saveEditedNote(notes, id, ...classList);
      modal.removeSaveButtonAttr('data-id');
    } else {
      updateNotesList(notes, classList);
    }

    try {
      renderTable('#notesTableBody', notes, 'note');
      renderStatistic('#statisticTableBody', 'statistic__item', notes);

      modal.closeModal();
      modal.clearInputs();
    } catch {
      alert('Something went wrong! Plese, reload the page and try again!');
    }
  });
}

export default saveNote;