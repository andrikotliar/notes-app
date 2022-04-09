const getCategory = (categoriesList) => {
  let selectedCategory = null;

  for(let category of categoriesList) {
    if(category.checked) {
      selectedCategory = category.value;
    }
  }

  return selectedCategory;
}

export default getCategory;