import renderStatistic from "./renderStatistic";
import renderTable from "./renderTable";

const archiveNote = (buttonClass, notesList) => {
  document.addEventListener('click', (event) => {
    const clickedBtn = event.target.closest(buttonClass);
    if(clickedBtn) {
      const noteId = clickedBtn.dataset.id;
      const list = [...notesList];
      const archivedNote = list.find(note => note.id === parseInt(noteId));

      archivedNote.active ?
        archivedNote.active = false :
        archivedNote.active = true;

      renderTable('#notesTableBody', list, 'note');
      renderStatistic('#statisticTableBody', 'statistic__item', list);
    }
  });
}

export default archiveNote;