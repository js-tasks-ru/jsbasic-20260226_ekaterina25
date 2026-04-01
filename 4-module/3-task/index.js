function highlight(table) {
  let rows = table.querySelectorAll('tbody tr');

  for (let row of rows) {

    let statusCell = row.cells[3];
      if (!statusCell.hasAttribute('data-available')) {
        row.hidden = true
      } else {
        if (statusCell.getAttribute('data-available') === 'true') {
          row.classList.add('available')
        }
        else {
          row.classList.add('unavailable')
        }
      }
    
    let genderCell = row.cells[2];
    if (genderCell.textContent === 'm') {
      row.classList.add('male')
    }
    if (genderCell.textContent === 'f') {
      row.classList.add('female')
    }

    let ageCell = row.cells[1];
    if (+row.cells[1].textContent < 18) {
      row.style.textDecoration = 'line-through'
    }

  }
}
