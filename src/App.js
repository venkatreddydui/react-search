import '@tradeshift/tradeshift-ui/ts.css';
import '@tradeshift/tradeshift-ui/ts.js';
import React, { PureComponent } from 'react';
import filterService from './filter';
import Header from './Header';
import Results from './Results';
import SearchInput from './SearchInput';
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: []
    };
    this.filterService = new filterService();
  }

  handleSearchChange = event => {
    const searchText = event.target.value;
    this.filterService.retrieveItems().then(results => {
      results = results
        .filter(company => {
          if (company.name.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
          }
          return false;
        })
        .slice(0, 20);

      if (searchText === '') {
        results = [];
      }
      this.setState({
        filteredData: results
      });
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <Results data={this.state.filteredData} />
      </div>
    );
  }
}
