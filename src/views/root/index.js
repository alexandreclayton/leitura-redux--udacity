import React, { Component } from 'react';
import {
  AppBar
} from 'material-ui';


import { connect } from 'react-redux';

import {
  rootChangeCategoryAction
  , rootListCategoriesAction
  , rootListPostsAction
  , rootOpenDialogAction
} from '../../actions/RootActions';

import PostFormView from '../../views/post';

// Components
import { MenuNavTop, ListPosts } from '../../components';

class RootView extends Component {
  componentDidMount() {
    this.props.rootListCategoriesAction();
    this.props.rootListPostsAction();
  }
  render() {
    return (
      <div>
        <AppBar title="Leitura"
          iconElementRight={<MenuNavTop
            categories={this.props.categories}
            categorySelected={this.props.categorySelected}
            handleChange={this.props.rootChangeCategoryAction} />}>
        </AppBar>
        
        <ListPosts posts={this.props.posts} />
        <PostFormView />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    categorySelected: state.RootReducer.categorySelected
    , categories: state.RootReducer.categories
    , posts: state.RootReducer.posts
    , openDialogState: state.RootReducer.openDialogState
  }
);

export default connect(mapStateToProps, {
  rootChangeCategoryAction
  , rootListCategoriesAction
  , rootListPostsAction
  , rootOpenDialogAction
})(RootView);

