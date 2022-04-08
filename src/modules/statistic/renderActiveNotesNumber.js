const renderActiveNotesNumber = (notes, category, activeState) => {
  const filteredNotes = notes.filter(
    note => note.active == activeState && note.category === category
  );

  return filteredNotes.length;
}

export default renderActiveNotesNumber;