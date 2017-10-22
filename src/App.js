import React, { Component } from 'react';
import {
  AppBar,
  DropDownMenu,
  MenuItem,
  FloatingActionButton,
  List,
  ListItem,
  Divider,
  Badge
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import EditorInsertInvitation from 'material-ui/svg-icons/editor/insert-invitation';
import moment from 'moment';

import * as  Api from './util/api';

const style = {
  position: 'fixed',
  right: 25,
  bottom: 25
};
const styleLabel = {
  display: 'inline-block',
  marginBottom: 16,
  fontSize: 20,
  fontFamily: 'Roboto, sans-serif',
  position: 'relative',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: 'white'
}
const ddmStyle = {
  color: 'white'
}
const icon = {
  width: 12,
  height: 12,
  color: '#CCC',
  marginRight: 4
}


class App extends Component {

  state = {
    categories: [],
    posts: [],
    categorySelected: "all"
  }

  handleChange = (event, index, categorySelected) => this.setState({ categorySelected });
  componentDidMount() {

    Api.getAllPosts().then(posts => {
      console.log(posts);
      this.setState({ posts })
    })

    Api.getAllCategories().then(categories => {
      this.setState({ categories })
    });
  }

  render() {
    return (
      <div>
        <AppBar title="Leitura"
          iconElementRight={<MenuNavTop categorySelected={this.state.categorySelected} handleChange={this.handleChange} />}>
        </AppBar>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <List>
          {this.state.posts.map(p => (
            <div key={p.id}>
              <ListItem
                leftIcon={<Badge
                  badgeContent={p.voteScore}
                  primary={true}
                  badgeStyle={{ top: 0, right: 40 }}
                ><ActionGrade /></Badge>}
                primaryText={p.title}
                secondaryText={
                  <p><span style={{ color: '#CCC' }}>
                    <EditorInsertInvitation style={icon} />{moment(p.timestamp).format("DD/MM/YY HH:mm")}, {p.author}</span><br />
                    {p.body.substring(0, 100)}</p>
                }

                secondaryTextLines={2}
              />
              <Divider inset={true} />
            </div>))}
        </List>
      </div>
    );
  }
}

const MenuNavTop = ({ categorySelected, handleChange }) => (
  <div>
    <label style={styleLabel}>Cetegorias:</label>
    <DropDownMenu labelStyle={ddmStyle} maxHeight={300} value={categorySelected} onChange={handleChange}>
      <MenuItem value="all" key="all" primaryText="Todos" />
      <MenuItem value="react ad asd" key="reacta sdasda" primaryText="Reactsa asd asdasdas" />
      <MenuItem value="react" key="react" primaryText="React" />
      <MenuItem value="redux" key="redux" primaryText="Redux" />
    </DropDownMenu>
  </div >
);

export default App;
