function makeDiagonalRed(table) {
  for (let row of table.rows) {
    let cell = row.cells[row.rowIndex];
    cell.style.backgroundColor = 'red';
  }
}
