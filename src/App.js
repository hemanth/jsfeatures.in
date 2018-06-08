import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Tabs from './components/Tabs';
import Card from './components/Card';
import es5 from './data/es5';
import es6 from './data/es6';
import es7 from './data/es7';

class App extends Component {

  consolidatedData = [...es5, ...es6, ...es7];

  state = {
    data: this.consolidatedData,
    es5,
    es6,
    es7,
    activeTab: -1, //-1 indicates 'All' tab,
    searchKeyword: ''
  }

  searchWithTab = (keyword, data) => {
    const filteredData = data.filter((item, idx) => {
      return item["title"].toLowerCase().includes(keyword.toLowerCase());
    });
    return filteredData;
  }

  filterCards = (value) => {
    const activeTab = this.state.activeTab;
    let filteredData = (activeTab == -1) ? this.consolidatedData : this.state[activeTab];
    if (value) {
      filteredData = this.searchWithTab(value, filteredData);
    }
    this.setState({
      data: filteredData,
      searchKeyword: value
    });
  }

  updateData = (subset) => {
    if (subset == -1) {
      const data = this.searchWithTab(this.state.searchKeyword, this.consolidatedData);
      this.setState({
        data,
        activeTab: subset
      });
    } else {
      const data = this.searchWithTab(this.state.searchKeyword, this.state[subset]);
      this.setState({
        data,
        activeTab: subset,

      });
    }
  }

  render() {
    return (
      <div className="container">
        <Search filterCards={this.filterCards}/>
        <Tabs updateData={this.updateData} />
        <div className="cards">
          <Card data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
