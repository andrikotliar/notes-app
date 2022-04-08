import getCurrentDate from './getCurrentDate';
import getCategory from './getCategory';

const generateNewNote = (titleId, contentId, categoriesClass) => {
  const titleInput = document.querySelector(titleId);
  const contentInput = document.querySelector(contentId);
  const categoriesList = document.querySelectorAll(categoriesClass);

  const title = titleInput.value === '' ?
    'New note without title' :
    titleInput.value;

  const content = contentInput.value === '' ?
    'No content' :
    contentInput.value;

  const newNote = {
    id: null,
    title,
    created: getCurrentDate(),
    category: getCategory(categoriesList),
    content,
    active: true
  }

  return newNote;
}

export default generateNewNote;