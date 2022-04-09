const generateUnicalID = (notes) => {
  let ids = [];
  ids = notes.map(note => note.id);

  const min = 0;
  const max = 1000;
  const newID = Math.floor(Math.random() * (max - min)) + min;

  const checkUnique = ids.every(id => id !== newID);

  if(!checkUnique) {
    return generateUnicalID();
  }

  return newID;
}

export default generateUnicalID;