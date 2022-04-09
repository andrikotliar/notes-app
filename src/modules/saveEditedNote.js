import getCategory from "./getCategory";

const saveEditedNote = (notes, id, titleId, contentId, categoriesClass) => {
  const titleInput = document.querySelector(titleId);
  const contentInput = document.querySelector(contentId);
  const categoriesList = document.querySelectorAll(categoriesClass);

  const editedNote = notes.find(
    note => note.id === parseInt(id)
  );

  editedNote.title = titleInput.value;
  editedNote.content = contentInput.value;
  editedNote.category = getCategory(categoriesList);
}

export default saveEditedNote;