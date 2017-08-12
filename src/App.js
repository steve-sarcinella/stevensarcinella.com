import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import WeatherWatchContainer from './containers/WeatherWatchContainer';

import './App.css';

const theme = {
  primary: '#6699CC;'
};
// <ThemeProvider theme={theme}>
//   <div className="app">
//   </div>
// </ThemeProvider>

class App extends Component {
  render() {
    return (
      <WeatherWatchContainer>
        OMG ITS THE WEATHER
      </WeatherWatchContainer>
    );
  }
}

export default App;
