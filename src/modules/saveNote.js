import updateNotesList from "./updateNotesList";
import renderTable from "./renderTable";
import renderStatistic from "./renderStatistic";

const saveNote = (saveButtonId, notes, modal) => {
  const saveButton = document.querySelector(saveButtonId);

  saveButton.addEventListener('click', () => {
    const updatedNotes = updateNotesList(notes);

    renderTable('#notesTableBody', updatedNotes, 'note');
    renderStatistic('#statisticTableBody', 'statistic__item', updatedNotes);

    modal.closeModal();
    modal.clearInputs();
  });
}

export default saveNote;