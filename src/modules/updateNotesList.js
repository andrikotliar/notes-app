import generateNewNote from "./generateNewNote";
import generateUnicalID from "./generateUnicalID";

const updateNotesList = (notes) => {
  const classList = [
    '.note-popup__title',
    '.note-popup__content',
    '.note-category-input'
  ];

  const newNote = generateNewNote(...classList);
  newNote.id = generateUnicalID(notes);

  notes.push(newNote);

  return notes;
}

export default updateNotesList;