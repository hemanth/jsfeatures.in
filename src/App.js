import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Tabs from './components/Tabs';
import Card from './components/Card';
import es5 from './data/es5';
import es6 from './data/es6';
import es7 from './data/es7';
import es21 from './data/es21';


class App extends Component {

  consolidatedData = [...es5, ...es6, ...es7,...es21];

  state = {
    data: this.consolidatedData,
    es5,
    es6,
    es7,
    es21,
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
        <footer className="site-footer">
          <strong>&copy; 2021</strong>
          <div>
            <a className="site-footer__github" href="https://github.com/hemanth/jsfeatures.in/tree/jsfeatures2.0" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/github.svg" alt="See code on GitHub" /> 
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
