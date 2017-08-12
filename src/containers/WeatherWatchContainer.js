import React, { Component } from 'react';

class WeatherWatchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 'Nothing yet'
    };
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/Your_Key/conditions/q/NC/Charlotte.json')
    .then(result => {
      console.log(result);
    });
  }

  render() {
    return (
      <div>
        {this.state.val}
      </div>
    );
  }
};

export default WeatherWatchContainer;
