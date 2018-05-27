import React, { Component } from 'react';

class Tabs extends Component {

    state = {
        activeIndex: 0
    }

    handleChange = (e) => {
        const value = e.currentTarget.dataset.tab;
        const idx = e.currentTarget.dataset.idx;
        this.props.updateData(value);
        this.setActiveIndex(idx);
    }

    setActiveIndex = (idx) => {
        this.setState({
            activeIndex: +idx
        });
    }

    items = [
        { id: 0, name: 'All', value: '-1'},
        { id: 1, name: 'ES5', value: 'es5'},
        { id: 2, name: 'ES6', value: 'es6'},
        { id: 3, name: 'ES7 and Beyond', value: 'es7'}
    ]

    getTabs = (items) => {
        return items.map((item, idx) => {
            const activeCls = (item.id === this.state.activeIndex) ? 'is-selected' : '';
            return  <button key={item.id} data-idx={item.id} type="submit" data-tab={item.value} onClick={this.handleChange} className={activeCls}>{item.name}</button>
        });
    }

    render() {
        return (
            <div className="search-filter" >
                {this.getTabs(this.items)}
            </div >
        )
    }
}

export default Tabs;