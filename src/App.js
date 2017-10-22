import React, { Component } from 'react';
import { AppBar, DropDownMenu, MenuItem } from 'material-ui';

import * as  Api from './util/api';

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    Api.getAllCategories().then(categories => {
      this.setState({ categories })
    });


  }
  render() {
    return (
      <div>
        <AppBar title="Leitura">

        </AppBar>
        <DropDownMenu value={'react'}>
          {
            this.state.categories.map(c => (<MenuItem value={c.path} key={c.path} primaryText={c.name} />))
          }
        </DropDownMenu>
      </div>
    );
  }
}

export default App;
