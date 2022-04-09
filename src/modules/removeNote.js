import renderStatistic from "./renderStatistic";
import renderTable from "./renderTable";

const removeNote = (buttonClass, notesList) => {
  document.addEventListener('click', (event) => {
    const clickedBtn = event.target.closest(buttonClass);
    if(clickedBtn) {
      const noteId = clickedBtn.dataset.id;
      const removedNoteIndex = notesList.findIndex(
        note => note.id == parseInt(noteId)
      );

      if(removedNoteIndex > -1) {
        notesList.splice(removedNoteIndex, 1);
      }

      renderTable('#notesTableBody', notesList, 'note');
      renderStatistic('#statisticTableBody', 'statistic__item', notesList);
    }
  });
}

export default removeNote;