import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import autobind from 'autobind-decorator';

import {DialogFrame} from './dialog';
import Header from './components/header';

import Main from './components/main';

type AppState = {};

export default class App extends React.Component<{}, AppState> {
  render() {
    return (
      <BrowserRouter>
        <DialogFrame>
          <Header />
          <Route component={Main}/>
        </DialogFrame>
      </BrowserRouter>
    );
  }
}
