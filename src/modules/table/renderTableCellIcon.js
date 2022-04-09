const renderTableCellIcon = (iconsList, category) => {
  const currentCategory = iconsList.find(
    item => item.title === category
  );

  return currentCategory.icon;
}

export default renderTableCellIcon;