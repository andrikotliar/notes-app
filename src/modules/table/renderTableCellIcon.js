const renderTableCellIcon = (iconsList, category) => {
  const currentCategory = iconsList.find(
    item => item.category === category
  );

  return currentCategory.icon;
}

export default renderTableCellIcon;