import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
// Provider tag can only have one child component
import { createStore } from 'redux';
import reducers from './reducers';
// Reducers processes data into the store
import { Header } from './components/common';


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Stack" />
      </View>
    </Provider>
  );
};

export default App;
