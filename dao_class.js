// dao_class.js
export class DataAccessObjectDAO {
  constructor() {
    this.message = '';
    this.tables = {};
    this.load();
  }

  load() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://193.149.164.45:15013/apps/mysql/api', false); // false for synchronous request
    xhr.send();

    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      this.message = response.message;
      this.tables = response.tables;
    } else {
      console.error('Failed to load data:', xhr.status, xhr.statusText);
    }
  }
}





