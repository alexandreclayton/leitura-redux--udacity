import React, { Component } from 'react';
import {
  AppBar
} from 'material-ui';
import { connect } from 'react-redux';
import {
  rootChangeCategoryAction
  , rootChangeSortAction
  , rootListCategoriesAction
  , rootListPostsAction
  , rootOpenDialogAction
} from '../../actions/RootActions';
import PostFormView from '../../views/post';
import { ListPosts, MenuNavTop } from '../../components';

class RootView extends Component {
  componentDidMount() {
    this.props.rootListCategoriesAction();
    this.props.rootListPostsAction();
  }
  render() {
    let { posts, categories, categorySelected, sortSelected } = this.props;
    return (
      <div>
        <AppBar title="Leitura" />
        <MenuNavTop categories={categories}
          categorySelected={categorySelected}
          sortSelected={sortSelected}
          changeCategory={this.props.rootChangeCategoryAction}
          changeSort={this.props.rootChangeSortAction} />
        <ListPosts posts={posts} />
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

