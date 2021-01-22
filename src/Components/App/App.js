import React from 'react';
import './App.css';
import Header from '../Header/Header';
import TextBox from '../TextBox/TextBox';
import Button from '../Button/Button';
import locations from '../../TravelTip';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomIndex = Math.floor(Math.random() * locations.length);
    this.setState({ index: randomIndex });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TextBox index={ this.state.index }/>
        <div className="button-wrap">
          <Button label="Get a new travel tip" onClick={this.handleClick}/>
        </div>
        <div className="footer">
          <span>Travel Bon Voyage developed by <a href="https://github.com/FishouttawaterCodes" target="_blank" rel="noopener noreferrer">Fishouttawater</a></span>
          <span>View project on <a href="https://github.com/FishouttawaterCodes/travel-bon-voyage" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    )
  }
}

export default App;
