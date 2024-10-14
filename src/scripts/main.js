'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const cells = row.cells[1].innerHTML;
  const newCells = row.insertCell(row.cells.length - 1);

  if (
    row.parentNode.tagName === 'THEAD' ||
    row.parentNode.tagName === 'TFOOT'
  ) {
    newCells.outerHTML = `<th>${cells}</th>`;
  } else {
    newCells.outerHTML = `<td>${cells}</td>`;
  }
}
