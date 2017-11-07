import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {red500, green500} from 'material-ui/styles/colors';
import moment from 'moment';

export const Comment = ({ author, body, voteScore, timestamp }) => (
    <div>
        <strong>{author},</strong>
        <p>{body}</p>
        <small>Vote Score: {voteScore}, {moment(timestamp).format("DD/MM/YY HH:mm")}</small>        
        <div>
            <IconButton touch={true} tooltip="Vote UP">
                <ActionThumbUp color={green500} />
            </IconButton>
            <IconButton touch={true} tooltip="Vote DOWN">
                <ActionThumbDown color={red500} />
            </IconButton>
            <IconButton touch={true} tooltip="Edit Comment">
                <EditorModeEdit />
            </IconButton>
            <IconButton touch={true} tooltip="Delete Comment">
                <ActionDelete />
            </IconButton>
        </div>
    </div>
);