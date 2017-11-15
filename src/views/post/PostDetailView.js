import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    getPostDetailAction
    , getAllCommentsByPostIdAction
    , postDetailOpenDialogCommentAction
    , postDetailCommentRemoveAction
    , postDetailCommentEditAction
    , postDetailCommentVoteAction
} from '../../actions/PostDetailActions';
import {
    postEditAction
    , postRemoveAction
    , postVoteAction
} from '../../actions/PostActions';
import moment from 'moment';
import { AppBar, Toolbar, ToolbarTitle, ToolbarGroup, IconButton } from 'material-ui';
import { Link } from 'react-router-dom';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import { red500, blue500, green500 } from 'material-ui/styles/colors';
import { Commentary } from '../../components';
import PostFormView from '../post/PostFormView';
import CommentFromView from '../comment/CommentFormView';

class PostDetailFormView extends Component {

    componentDidMount() {
        let { PostEntity, history } = this.props;
        let postId = this.props.match.params.postId;
        this.props.getPostDetailAction(postId, this.props.history);
        this.props.getAllCommentsByPostIdAction(postId);
        // Validando
        if (PostEntity.error !== undefined) {
            alert("Sorry this post was not found.");
            history.push("/");
        }
    }

    render() {
        let { PostEntity, comments } = this.props;
        let { title, body, author, voteScore, timestamp } = PostEntity;
        return (<div>
            <AppBar title="Detail"
                iconElementLeft={
                    <Link to="/">
                        <IconButton><HardwareKeyboardArrowLeft /></IconButton>
                    </Link>} />
            <Toolbar>
                <ToolbarGroup firstChild={false}>
                    <ToolbarTitle text={`Vote Score: ${voteScore}`} />
                    <ToolbarTitle text={`Total Comments: ${comments.length}`} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <IconButton touch={true}
                        tooltip="Edit Post"
                        onClick={() => this.props.postEditAction(PostEntity)}>
                        <EditorModeEdit />
                    </IconButton>
                    <IconButton touch={true}
                        tooltip="Delete Post"
                        onClick={() => this.props.postRemoveAction(PostEntity.id, this.props.history)}>
                        <ActionDelete />
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
            <h1>{title}</h1>
            <div id="content">{body}</div>
            <small>By: {author}, Date: {moment(timestamp).format("DD/MM/YY HH:mm")}</small><br />
            <IconButton
                touch={true}
                tooltip="Vote UP"
                onClick={() => this.props.postVoteAction(PostEntity.id, "upVote")}>
                <ActionThumbUp color={green500} />
            </IconButton>
            <IconButton
                touch={true}
                tooltip="Vote DOWN"
                onClick={() => this.props.postVoteAction(PostEntity.id, "downVote")}>
                <ActionThumbDown color={red500} />
            </IconButton>
            <div id="comments">
                <h2>Comments
                    <IconButton touch={true}
                        tooltip="Add new comment"
                        onClick={() => this.props.postDetailOpenDialogCommentAction(true)} >
                        <ActionNoteAdd color={blue500} />
                    </IconButton>
                </h2>
                {comments.map(c => (<Commentary
                    key={c.id}
                    CommentEntity={c}
                    handleVoteComment={this.props.postDetailCommentVoteAction}
                    handleEditComment={this.props.postDetailCommentEditAction}
                    handleRemoveComment={this.props.postDetailCommentRemoveAction} />))}
            </div>
            <PostFormView fab={false} />
            <CommentFromView />
        </div>)
    }
}

const mapStateToProps = state => (
    {
        PostEntity: state.PostDetailReducer.PostEntity
        , comments: state.PostDetailReducer.comments
    }
);

export default withRouter(connect(mapStateToProps, {
    getPostDetailAction
    , getAllCommentsByPostIdAction
    , postDetailOpenDialogCommentAction
    , postDetailCommentRemoveAction
    , postEditAction
    , postRemoveAction
    , postVoteAction
    , postDetailCommentEditAction
    , postDetailCommentVoteAction
})(PostDetailFormView));