import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Tabs from './components/Tabs';
import Card from './components/Card';
import es5 from './data/es5';
import es6 from './data/es6';
import es7 from './data/es7';

class App extends Component {

  state = {
    data: [...es5, ...es6, ...es7],
    es5,
    es6,
    es7
  }

  filterCards = (value) => {
    const filteredData = this.state.data.filter((item, idx) => {
      return item["title"].toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      data: filteredData
    });
  }

  updateData = (subset) => {
    if (subset == -1) {
      this.setState({
        data: [...es5, ...es6, ...es7]
      });
    } else {
      this.setState({
        data: this.state[subset]
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Search data={this.filterCards} />
        <Tabs updateData={this.updateData} />
        <div className="cards">
          <Card data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
