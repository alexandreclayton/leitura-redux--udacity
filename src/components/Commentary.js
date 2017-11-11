import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500, green500 } from 'material-ui/styles/colors';
import moment from 'moment';

export const Commentary = ({ CommentEntity, handleEditComment, handleRemoveComment, handleVoteComment }) => (
    <div>
        <strong>{CommentEntity.author},</strong>
        <p>{CommentEntity.body}</p>
        <small>Vote Score: {CommentEntity.voteScore}, {moment(CommentEntity.timestamp).format("DD/MM/YY HH:mm")}</small>
        <div>
            <IconButton
                touch={true}
                tooltip="Vote UP"
                onClick={() => handleVoteComment(CommentEntity.id, "upVote")}>
                <ActionThumbUp color={green500} />
            </IconButton>
            <IconButton
                touch={true}
                tooltip="Vote DOWN"
                onClick={() => handleVoteComment(CommentEntity.id, "downVote")}>
                <ActionThumbDown color={red500} />
            </IconButton>
            <IconButton touch={true}
                tooltip="Edit Comment"
                onClick={() => handleEditComment(CommentEntity.id)}>
                <EditorModeEdit />
            </IconButton>
            <IconButton touch={true}
                tooltip="Delete Comment"
                onClick={() => handleRemoveComment(CommentEntity.id)}>
                <ActionDelete />
            </IconButton>
        </div>
    </div>
);

Commentary.defaultProps = {
    CommentEntity: {}
};

Commentary.propTypes = {
    CommentEntity: PropTypes.object.isRequired
    , handleEditComment: PropTypes.func.isRequired
    , handleRemoveComment: PropTypes.func.isRequired
    , handleVoteComment: PropTypes.func.isRequired
};