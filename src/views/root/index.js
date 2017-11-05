import React, { Component } from 'react';
import {
  AppBar
  , IconButton, IconMenu, MenuItem, DropDownMenu, SelectField
} from 'material-ui';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import Sort from 'material-ui/svg-icons/content/sort';

import { connect } from 'react-redux';

import {
  rootChangeCategoryAction
  , rootChangeSortAction
  , rootListCategoriesAction
  , rootListPostsAction
  , rootOpenDialogAction
} from '../../actions/RootActions';

import PostFormView from '../../views/post';

// Components
import { MenuNavTop, ListPosts, Categories } from '../../components';

class RootView extends Component {
  componentDidMount() {
    this.props.rootListCategoriesAction();
    this.props.rootListPostsAction();
  }
  render() {
    return (
      <div>
        <AppBar title="Leitura" />
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Categories:" />
            <Categories
              categories={this.props.categories}
              categorySelected={this.props.categorySelected}
              handleChange={this.props.rootChangeCategoryAction} 
              showFirstElement={true} />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Sort:" />
            <SelectField value={this.props.sortSelected} onChange={(event, index, sortSelected) => this.props.rootChangeSortAction(sortSelected)}>
              <MenuItem value={'-voteScore'} primaryText="Vote Score" />
              <MenuItem value={'-timestamp'} primaryText="Date" />
            </SelectField>
          </ToolbarGroup>
        </Toolbar>
        <ListPosts posts={this.props.posts} />
        <PostFormView />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    categorySelected: state.RootReducer.categorySelected
    , sortSelected: state.RootReducer.sortSelected
    , categories: state.RootReducer.categories
    , posts: state.RootReducer.posts
    , openDialogState: state.RootReducer.openDialogState
  }
);

export default connect(mapStateToProps, {
  rootChangeCategoryAction
  , rootChangeSortAction
  , rootListCategoriesAction
  , rootListPostsAction
  , rootOpenDialogAction
})(RootView);

