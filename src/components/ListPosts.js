import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Divider, Badge } from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import EditorInsertInvitation from 'material-ui/svg-icons/editor/insert-invitation';
import moment from 'moment';
import { Link } from 'react-router-dom';
import * as Styles from '../styles';

export const ListPosts = ({ posts }) => (
    <List>
        {posts.map(p => (
            <Link key={p.id} to={`/post/${p.id}`}>
                <ListItem
                    leftIcon={<Badge
                        badgeContent={p.voteScore}
                        primary={true}
                        badgeStyle={{ top: 0, right: 40 }}
                    ><ActionGrade /></Badge>}
                    primaryText={p.title}
                    secondaryText={
                        <p><span style={{ color: '#CCC' }}>
                            <EditorInsertInvitation style={Styles.ListPostsStyle.Icon} />{moment(p.timestamp).format("DD/MM/YY HH:mm")}, {p.author}</span><br />
                            {p.body.substring(0, 100)}</p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
            </Link>))}
    </List>
);

ListPosts.defaultProps = {
    posts: []
};

ListPosts.propTypes = {
    posts: PropTypes.array.isRequired
};