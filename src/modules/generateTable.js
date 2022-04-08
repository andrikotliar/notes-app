import generateTableCells from './table/generateTableCells';
import { tableStructure } from './data/tableStructure';
import { categories } from './data/categories';

const generateTable = (tableBodyId, notes, noteClassName) => {
  const tableBody = document.querySelector(tableBodyId);

  tableBody.textContent = '';

  for(let note of notes) {
    const tr = document.createElement('tr');
    tr.classList.add(noteClassName);

    generateTableCells(tableStructure, tr, note, categories);

    tableBody.prepend(tr);
  }
}

export default generateTable;