import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class RetreatStore {
  retreats = [];
  filteredRetreats = [];
  currentPage = 1;
  totalPages = 1;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRetreats() {
    const response = await axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
    this.retreats = response.data;
    this.filteredRetreats = response.data;
    this.totalPages = Math.ceil(response.data.length / 5); 
  }

  filterRetreats(key, value) {
    if (value === '') {
      this.filteredRetreats = this.retreats;
    } else {
      this.filteredRetreats = this.retreats.filter(retreat => retreat[key] === value);
    }
  }

  searchRetreats(query) {
    this.filteredRetreats = this.retreats.filter(retreat => retreat.title.toLowerCase().includes(query.toLowerCase()));
  }

  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchRetreats(); 
    }
  }
}

const retreatStore = new RetreatStore();
export default retreatStore;
