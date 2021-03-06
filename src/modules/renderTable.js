import renderTableCells from './table/renderTableCells';
import { tableStructure } from './data/tableStructure';
import { categories } from './data/categories';

const renderTable = (tableBodyId, notes, noteClassName) => {
  const tableBody = document.querySelector(tableBodyId);

  tableBody.textContent = '';

  for(let note of notes) {
    const tr = document.createElement('tr');
    tr.classList.add(noteClassName);

    if(!note.active) {
      tr.classList.add('is-archived');
    }

    if(note.active || note.displayed) {
      renderTableCells(tableStructure, tr, note, categories);
    }

    tableBody.prepend(tr);
  }
}

export default renderTable;