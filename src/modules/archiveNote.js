import renderStatistic from "./renderStatistic";
import renderTable from "./renderTable";

const archiveNote = (buttonClass, notesList) => {
  document.addEventListener('click', (event) => {
    const clickedBtn = event.target.closest(buttonClass);
    if(clickedBtn) {
      const noteId = clickedBtn.dataset.id;
      const archivedNote = notesList.find(note => note.id === parseInt(noteId));

      archivedNote.active ?
        archivedNote.active = false :
        archivedNote.active = true;

      renderTable('#notesTableBody', notesList, 'note');
      renderStatistic('#statisticTableBody', 'statistic__item', notesList);
    }
  });
}

export default archiveNote;