import React, { Component } from 'react';
import {
  AppBar,
  FloatingActionButton
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';

import { rootChangeCategoryAction, rootListCategoriesAction, rootListPostsAction } from '../../actions/RootActions';

// Components
import { MenuNavTop, ListPosts } from '../../components';

const style = {
  position: 'fixed',
  right: 25,
  bottom: 25
};

class RootView extends Component {
  componentDidMount() {
    this.props.rootListCategoriesAction();
    this.props.rootListPostsAction();
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <AppBar title="Leitura"
          iconElementRight={<MenuNavTop
            categories={this.props.categories}
            categorySelected={this.props.categorySelected}
            handleChange={this.props.rootChangeCategoryAction} />}>
        </AppBar>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <ListPosts posts={this.props.posts}/>        
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    categorySelected: state.RootReducer.categorySelected
    , categories: state.RootReducer.categories
    , posts: state.RootReducer.posts
  }
);

export default connect(mapStateToProps, {
  rootChangeCategoryAction
  , rootListCategoriesAction
  , rootListPostsAction
})(RootView);

