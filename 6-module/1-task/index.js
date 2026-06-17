/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let container = document.createElement('div');
    container.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>`
    this.elem = container.querySelector('table');
    let tbody = this.elem.querySelector('tbody');
    tbody.innerHTML = rows.map(row => {
      return `<tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>
      </tr>`
    }).join('');
    this.addEventListeners();
  }

  addEventListeners() {
    this.elem.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }
      event.target.closest('tr').remove();
    });
  }
  
}
