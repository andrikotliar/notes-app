import renderTableCellIcon from "./renderTableCellIcon";
import rednderTableContentDates from "./renderTableContentDates";

const generateTableCells = (tableStructure, tableRow, note, icons) => {
  for(let item of tableStructure) {
    const td = document.createElement('td');
    td.classList.add(item.className);

    if(item.type == 'dinamicIcon') {
      td.innerHTML = renderTableCellIcon(icons, note.category);
    }

    if(item.type == 'text') {
      td.textContent = note[item.property]
    };

    if(item.type == 'dinamicDates') {
      td.textContent = rednderTableContentDates(note.content);
    }

    if(item.type == 'container') {
      const elem = document.createElement(item.children.elem);
      elem.classList.add(...item.children.classNames);
      elem.innerHTML = item.children.content;

      if(item.children.elem == 'button') {
        elem.setAttribute('data-id', note.id);
      }

      td.append(elem);
    }

    tableRow.append(td);
  }
}

export default generateTableCells;