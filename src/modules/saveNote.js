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
    let updatedNotes = notes;
    if(saveButton.hasAttribute('data-id')) {
      const id = saveButton.dataset.id;
      saveEditedNote(notes, id, ...classList);
      modal.removeSaveButtonAttr('data-id');
    } else {
      updatedNotes = updateNotesList(notes, classList);
    }

    renderTable('#notesTableBody', updatedNotes, 'note');
    renderStatistic('#statisticTableBody', 'statistic__item', updatedNotes);

    modal.closeModal();
    modal.clearInputs();
  });
}

export default saveNote;