import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
// Provider tag can only have one child component
import { createStore } from 'redux';
import reducers from './reducers';
// Reducers reduce our application state
import { Header } from './components/common';
import LibraryList from './components/LibraryList'


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
