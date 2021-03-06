import React, { Component } from "react";
import Header from './Header';
import store from './store';
import { Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Header />
      </Provider>
    );
  }
}

export default App;
