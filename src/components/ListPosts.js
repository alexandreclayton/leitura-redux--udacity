import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Divider, Badge, IconButton, IconMenu, MenuItem } from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import EditorInsertInvitation from 'material-ui/svg-icons/editor/insert-invitation';
import moment from 'moment';
import * as Styles from '../styles';
import { red500, green500, grey400 } from 'material-ui/styles/colors';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

export const ListPosts = ({ posts }) => (
    <List>
        {posts.map(p => (
            <div key={p.id}>
                <ListItem
                    leftIcon={
                        <Badge
                            badgeContent={p.voteScore}
                            primary={true}
                            badgeStyle={{ top: 0, right: 40 }}>
                            <ActionGrade />
                        </Badge>}
                    rightIconButton={
                        <IconMenu
                            iconButtonElement={<IconButton
                                touch={true}
                                tooltip="more"
                                tooltipPosition="bottom-left">
                                <MoreVertIcon color={grey400} />
                            </IconButton>}>
                            <MenuItem leftIcon={<ActionThumbUp color={green500} />}>Vote UP</MenuItem>
                            <MenuItem leftIcon={<ActionThumbDown color={red500} />}>Vote Down</MenuItem>
                            <MenuItem leftIcon={<EditorModeEdit />}>Edit</MenuItem>
                            <MenuItem leftIcon={<ActionDelete />}>Delete</MenuItem>
                        </IconMenu>}
                    primaryText={p.title}
                    secondaryText={
                        <p>
                            <span style={{ color: '#CCC' }}>
                                <EditorInsertInvitation style={Styles.ListPostsStyle.Icon} />{moment(p.timestamp).format("DD/MM/YY HH:mm")}, {p.author}</span><br />
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

ListPosts.defaultProps = {
    posts: []
};

ListPosts.propTypes = {
    posts: PropTypes.array.isRequired
};