const fillModalWithData = (titleId, contentId, categoriesClass, note) => {
  const titleInput = document.querySelector(titleId);
  const contentInput = document.querySelector(contentId);
  const categoriesList = document.querySelectorAll(categoriesClass);

  titleInput.value = note.title;
  contentInput.value = note.content;

  for(let category of categoriesList) {
    if(category.value === note.category) {
      category.checked = true;
    }
  }
}

export default fillModalWithData;