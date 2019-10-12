import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
// import { tsConstructorType } from '@babel/types';

class App extends React.Component {
    /* Display stocks page */
    
  contructor(props) {
    super(props);
    this.state = {
      stocks = ['APPL', 'CAT']
    };
  }

  render() {
    let stocks = this.state.stocks.map((stock) => {
          return(
            <div>hello world</div>
          );
        })
    return (
      <React.Fragment>
        <body>
            <div className = "header">
              <header>Breakout</header>
            </div>
            <div className = "searchBox">
              <input class="searchInput"type="text" name="" placeholder="Search"/>
                <button class="searchButton" href="#">
                  <i class="material-icons">
                      search
                  </i>
                </button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className = "stock">
              APPL
            </div>
        </body>
      </React.Fragment>
      
    );
  }
  
}

export default App;
