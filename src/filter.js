import searchList from './searchList.json';

class FilterService {
  constructor() {
    this.searchResults = searchList;
  }

  async retrieveItems() {
    return Promise.resolve(this.searchResults);
  }
}

export default FilterService;
