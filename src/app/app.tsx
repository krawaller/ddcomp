import * as React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import autobind from 'autobind-decorator';

import {DialogFrame} from './dialog';
import Header from './components/header';

import Main from './components/main';
import {HeroList} from './heroes/herolist';
import {HeroDetail} from './heroes/herodetail';
import {SkillList} from './skills/skillist';
import {SkillDetail} from './skills/skilldetail';
import {ClassList} from './classes/classlist';
import {ClassDetail} from './classes/classdetail';

type AppState = {};

export default class App extends React.Component<{}, AppState> {
  render() {
    return (
      <HashRouter>
        <DialogFrame>
          <Header />
          <Route path="/skills/:skill" component={SkillDetail} />
          <Route path="/skills" exact component={SkillList} />
          <Route path="/heroes/:hero" component={HeroDetail} />
          <Route path="/heroes" exact component={HeroList} />
          <Route path="/classes/:class" component={ClassDetail} />
          <Route path="/classes" exact component={ClassList} />
          <Route path="/" exact component={Main}/>
        </DialogFrame>
      </HashRouter>
    );
  }
}
