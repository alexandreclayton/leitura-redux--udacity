import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    Dialog,
    FlatButton,
    TextField
} from 'material-ui';
import {
    postDetailOpenDialogCommentAction
    , postDetailCommentSaveAction
    , postDetailGetCommentAction
    , commentHandleChangeAction
} from '../../actions/PostDetailActions';

class CommentFormView extends Component {

    componentDidMount() {

    }

    render() {
        let { PostEntity, CommentEntity, fieldsErros, openDialogState } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={() => this.props.postDetailOpenDialogCommentAction(false)}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.props.postDetailCommentSaveAction(CommentEntity, PostEntity.id)}
            />,
        ];
        return (
            <Dialog
                title={!CommentEntity.id ? "New Comment" : "Edit Comment"}
                actions={actions}
                modal={true}
                open={openDialogState}
                onRequestClose={() => this.props.postDetailOpenDialogCommentAction(false)}
                autoScrollBodyContent={true}>
                <TextField
                    name="body"
                    hintText="Post body"
                    floatingLabelText="Body"
                    floatingLabelFixed={true}
                    multiLine={true}
                    fullWidth={true}
                    errorText={fieldsErros.find((text) => text === "body") ? "This field is required" : ""}
                    value={CommentEntity.body}
                    onChange={this.props.commentHandleChangeAction}
                /><br />
                <TextField
                    name="author"
                    hintText="Post Author"
                    floatingLabelText="Author"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    value={CommentEntity.author}
                    errorText={fieldsErros.find((text) => text === "author") ? "This field is required" : ""}
                    onChange={this.props.commentHandleChangeAction}
                /><br />
            </Dialog>
        );
    }
}

const mapStateToProps = state => ({
    PostEntity: state.PostDetailReducer.PostEntity
    , CommentEntity: state.PostDetailReducer.CommentEntity
    , fieldsErros: state.PostDetailReducer.fieldsErros
    , openDialogState: state.PostDetailReducer.openDialogState
});

export default withRouter(connect(mapStateToProps, {
    postDetailOpenDialogCommentAction
    , postDetailCommentSaveAction
    , postDetailGetCommentAction
    , commentHandleChangeAction
})(CommentFormView));