import renderTable from "./renderTable";

const showArchivedNotes = (showButtonId, notes) => {
  const showButton = document.querySelector(showButtonId);

  showButton.addEventListener('click', () => {
    const list = [...notes];

    if(showButton.classList.contains('archive-is-open')) {
      list.forEach(note => delete note.displayed);
      showButton.classList.remove('archive-is-open');
    } else {
      list.forEach(note => note.displayed = true);
      showButton.classList.add('archive-is-open');
    }

    renderTable('#notesTableBody', list, 'note');
  })
}

export default showArchivedNotes;