import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robot';
import SearchBox from './SearchBox';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield : ''
        }
    }

    render() {
        return (
            <div className='tc'>
                <h1> Robo Friends  </h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        );
    }

}


export default App;
