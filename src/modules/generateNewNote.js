import getCurrentDate from './getCurrentDate';
import getCategory from './getCategory';

const generateNewNote = (titleId, contentId, categoriesClass) => {
  const titleInput = document.querySelector(titleId);
  const contentInput = document.querySelector(contentId);
  const categoriesList = document.querySelectorAll(categoriesClass);

  const newNote = {
    id: null,
    title: titleInput.value,
    created: getCurrentDate(),
    category: getCategory(categoriesList),
    content: contentInput.value,
    active: true
  }

  return newNote;
}

export default generateNewNote;