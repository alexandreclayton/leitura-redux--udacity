import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Dialog,
    FlatButton,
    TextField,
    FloatingActionButton
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as Styles from '../../styles';
import { Categories } from '../../components';
import {
    rootOpenDialogAction
} from '../../actions/RootActions';
import {
    postHandleChangeAction
    , postChangeCategoryAction
} from '../../actions/PostActions';

class PostFormView extends Component {

    componentDidMount() {
        // Caso tenha ID buscar no servidor os dados para edição
    }

    render() {
        let { PostEntity } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={() => this.props.rootOpenDialogAction(false)}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.props.rootOpenDialogAction(false)}
            />,
        ];

        return (
            <div>
                <FloatingActionButton
                    style={Styles.FormPostStyle.FabStyle}
                    onClick={() => this.props.rootOpenDialogAction(true)}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title={!PostEntity.id ? "New Post" : "Edit Post"}
                    actions={actions}
                    modal={true}
                    open={this.props.openDialogState}
                    onRequestClose={() => this.props.rootOpenDialogAction(false)}
                    autoScrollBodyContent={true}>
                    <div>
                        <TextField
                            name="title"
                            hintText="Post title"
                            floatingLabelText="Title"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            value={PostEntity.title}
                            onChange={this.props.postHandleChangeAction}
                        /><br />
                        <TextField
                            name="body"
                            hintText="Post body"
                            floatingLabelText="Body"
                            floatingLabelFixed={true}
                            multiLine={true}
                            fullWidth={true}
                            value={PostEntity.body}
                            onChange={this.props.postHandleChangeAction}
                        /><br />
                        <TextField
                            name="author"
                            hintText="Post Author"
                            floatingLabelText="Author"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            value={PostEntity.author}
                            onChange={this.props.postHandleChangeAction}
                        /><br />
                        <Categories
                            name="category"
                            categories={this.props.categories}
                            floatingLabelText="Categories"
                            categorySelected={PostEntity.category}
                            handleChange={this.props.postChangeCategoryAction}
                            fullWidth={true}
                        /><br />
                        <TextField
                            disabled={true}
                            hintText="Vote Score"
                            floatingLabelText="Vote Score"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            value={PostEntity.voteScore}
                        /><br />
                    </div>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        openDialogState: state.RootReducer.openDialogState
        , categories: state.RootReducer.categories
        , PostEntity: state.PostReducer.PostEntity
    }
);

export default connect(mapStateToProps, {
    rootOpenDialogAction
    , postHandleChangeAction
    , postChangeCategoryAction
})(PostFormView);