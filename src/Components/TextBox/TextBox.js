import React from 'react';
import './TextBox.css';
import locations from '../../TravelTip.js';


class TextBox extends React.Component {
  displayTravelIdea() {
    const { index } = this.props;
    return locations[index];
  }

  render() {
    const location = this.displayTravelIdea();

    return (
      <div className="textbox">
        <div className="compare">
          <h3>{location.title}</h3>
        </div>
        <div className="description">
          <p>{location.description}</p>
        </div>
      </div>
    )
  }
}

export default TextBox;
