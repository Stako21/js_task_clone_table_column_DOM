'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const cellContent = row.cells[1].innerHTML;
  const newCells = row.insertCell(row.cells.length - 1);

  if (row.parentNode.tagName !== 'TBODY') {
    newCells.outerHTML = `<th>${cellContent}</th>`;
  } else {
    newCells.outerHTML = cellContent;
  }
}
