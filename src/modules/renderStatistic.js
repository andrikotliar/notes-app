import { categories } from './data/categories';
import renderActiveNotesNumber from './statistic/renderActiveNotesNumber';

const renderStatistic = (tableBodyId, rowClassName, notes) => {
  const tableBody = document.querySelector(tableBodyId);

  tableBody.textContent = '';

  for(let category of categories) {
    const tr = document.createElement('tr');
    tr.classList.add(rowClassName);

    const iconCell = document.createElement('td');
    const categoryCell= document.createElement('td');
    const activeNotesCount = document.createElement('td');
    const archivedNotesCount = document.createElement('td');

    activeNotesCount.classList.add('statistic__active');
    archivedNotesCount.classList.add('statistic__archived');

    const params = [notes, category.title];

    activeNotesCount.textContent = renderActiveNotesNumber(...params, true);
    archivedNotesCount.textContent = renderActiveNotesNumber(...params, false);

    iconCell.innerHTML = category.icon;
    categoryCell.textContent = category.title;

    const tds = [
      iconCell,
      categoryCell,
      activeNotesCount,
      archivedNotesCount
    ];

    tr.append(...tds);

    tableBody.append(tr);
  }
}

export default renderStatistic;