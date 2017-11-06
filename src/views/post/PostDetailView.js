import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, ToolbarTitle, ToolbarGroup, RaisedButton } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import { Comment } from '../../components';

class PostFormView extends Component {
    render() {
        let ID = this.props.match.params.id;
        let { title, body, author, voteScore, date } = this.props;
        return (<div>
            <AppBar title="Detail"
                iconElementLeft={
                    <Link to="/">
                        <IconButton><HardwareKeyboardArrowLeft /></IconButton>
                    </Link>} />
            <Toolbar>
                <ToolbarGroup firstChild={false}>
                    <ToolbarTitle text={`Vote Score: ${voteScore}`} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <IconButton touch={true}>
                        <EditorModeEdit />
                    </IconButton>
                    <IconButton touch={true}>
                        <ActionDelete />
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
            <h1>{title}</h1>
            <div id="content">{body}</div>
            <small>By: {author}, Date: {date}</small><br />
            <IconButton touch={true}>
                <ActionThumbUp />
            </IconButton>
            <IconButton touch={true}>
                <ActionThumbDown />
            </IconButton>
            <div id="comments">
                <h2>Comments</h2>
                <Comment author="Alexandre" body="asdasda asdas ds" voteScore="1" />
            </div>
        </div>)
    }
}

export default PostFormView
