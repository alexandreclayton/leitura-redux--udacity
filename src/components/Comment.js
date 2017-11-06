import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';

export const Comment = ({ author, body, voteScore }) => (
    <div class="comment">
        <div class="author">{author}</div>
        <div class="body">{body}</div>
        <div class="Vote Score">Vote Score: {voteScore}</div>
        <div>
            <IconButton touch={true}>
                <ActionThumbUp />
            </IconButton>
            <IconButton touch={true}>
                <ActionThumbDown />
            </IconButton>
            <IconButton touch={true}>
                <EditorModeEdit />
            </IconButton>
            <IconButton touch={true}>
                <ActionDelete />
            </IconButton>
        </div>
    </div>
);