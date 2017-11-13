import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
  rootChangeCategoryAction
  , rootChangeSortAction
  , rootListCategoriesAction
  , rootListPostsAction
  , rootOpenDialogAction
} from '../../actions/RootActions';
import {
  postEditAction
  , postRemoveAction
  , postVoteAction
} from '../../actions/PostActions';
import PostFormView from '../../views/post/PostFormView';
import { ListPosts, MenuNavTop } from '../../components';

class RootView extends Component {

  componentDidMount() {
    this.props.rootListCategoriesAction();
    this.props.rootChangeCategoryAction("all", this.props.history);
  }

  render() {
    let { history, posts, categories, categorySelected, sortSelected } = this.props;
    return (
      <div>
        <MenuNavTop title="Leitura"
          history={history}
          categories={categories}
          categorySelected={categorySelected}
          sortSelected={sortSelected}
          handleChangeCategory={this.props.rootChangeCategoryAction}
          handleChangeSort={this.props.rootChangeSortAction} />
        <ListPosts
          posts={posts}
          history={history}
          handleVotePost={this.props.postVoteAction}
          handleEditPost={this.props.postEditAction}
          handleDeletePost={this.props.postRemoveAction} />
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

export default withRouter(connect(mapStateToProps, {
  rootChangeCategoryAction
  , rootChangeSortAction
  , rootListCategoriesAction
  , rootListPostsAction
  , rootOpenDialogAction
  , postVoteAction
  , postEditAction
  , postRemoveAction
})(RootView));

