import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Divider, Badge, IconMenu, IconButton, MenuItem } from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import EditorInsertInvitation from 'material-ui/svg-icons/editor/insert-invitation';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import { grey400, red500, green500 } from 'material-ui/styles/colors';
import moment from 'moment';
import * as Styles from '../styles';

export const ListPosts = ({ posts, history, handleVotePost, handleEditPost, handleDeletePost }) => {
    const iconMorePostActions = (
        <IconButton
            touch={true}
            tooltip="Actions"
            tooltipPosition="bottom-left">
            <MoreVertIcon color={grey400} />
        </IconButton>
    );
    return (
        <List>
            {posts.map(p => (
                <div onClick={() => history.push(`/post/${p.id}`)} key={p.id}>
                    <ListItem
                        leftIcon={
                            <Badge
                                badgeContent={p.voteScore}
                                primary={true}
                                badgeStyle={{ top: 0, right: 40 }}>
                                <ActionGrade />
                            </Badge>}
                        rightIconButton={
                            <IconMenu iconButtonElement={iconMorePostActions}>
                                <MenuItem
                                    leftIcon={<ActionThumbUp color={green500} />}
                                    onClick={() => handleVotePost(p.id, "upVote")}>Vote UP</MenuItem>
                                <MenuItem
                                    leftIcon={<ActionThumbDown color={red500} />}
                                    onClick={() => handleVotePost(p.id, "downVote")}>Vote Down</MenuItem>
                                <MenuItem
                                    leftIcon={<EditorModeEdit />}
                                    onClick={() => handleEditPost(p)}>Edit</MenuItem>
                                <MenuItem
                                    leftIcon={<ActionDelete />}
                                    onClick={() => handleDeletePost(p.id)}>Delete</MenuItem>
                            </IconMenu>}
                        primaryText={p.title}
                        secondaryText={
                            <p>
                                <span style={{ color: '#CCC' }}>
                                    <EditorInsertInvitation style={Styles.ListPostsStyle.Icon} />
                                    {moment(p.timestamp).format("DD/MM/YY HH:mm")}
                                    , {p.author}
                                    , Total comments: {p.totalComments}
                                </span>
                                <br />
                                {p.body.substring(0, 100)}
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                </div>
            ))}
        </List>
    );
}

ListPosts.defaultProps = {
    posts: []
};

ListPosts.propTypes = {
    posts: PropTypes.array.isRequired
};