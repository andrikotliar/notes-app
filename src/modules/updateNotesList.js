import generateNewNote from "./generateNewNote";
import generateUnicalID from "./generateUnicalID";

const updateNotesList = (notes, classList) => {

  const newNote = generateNewNote(...classList);
  newNote.id = generateUnicalID(notes);

  notes.push(newNote);

  return notes;
}

export default updateNotesList;