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

class PostFormView extends Component {
    render() {
        let ID = this.props.match.params.id;
        return (<div>
            <AppBar title="Detail"
                iconElementLeft={
                    <Link to="/">
                        <IconButton><HardwareKeyboardArrowLeft /></IconButton>
                    </Link>} />
            <Toolbar>
                <ToolbarGroup firstChild={false}>
                    <ToolbarTitle text="Vote Score: 100" />
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
            <h1>TITULO TESTE</h1>
                <div id="content">
                    dad asdasdasda
                d asdasdasdasdas
            </div>
            
            <small>By: Alexandre clayton, Date: 06/11/2017</small><br />
            <IconButton touch={true}>
                <ActionThumbUp />
            </IconButton>
            <IconButton touch={true}>
                <ActionThumbDown />
            </IconButton>
            <div id="comments">
                <h2>Comments</h2>
                <div id="comment">
                    <div class="author">Alexandre Sette</div>
                    <div class="body">AJsdhjakhdja  asdgajsgdhjad as asjdhjakhadjsh as djashdja </div>
                    <div class="Vote Score">Vote Score: 2</div>
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
                <div id="comment">
                    <div class="author">Alexandre Sette</div>
                    <div class="body">AJsdhjakhdja  asdgajsgdhjad as asjdhjakhadjsh as djashdja </div>
                    <div class="Vote Score">Vote Score: 2</div>
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
                <div id="comment">
                    <div class="author">Alexandre Sette</div>
                    <div class="body">AJsdhjakhdja  asdgajsgdhjad as asjdhjakhadjsh as djashdja </div>
                    <div class="Vote Score">Vote Score: 2</div>
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
                <div id="comment">
                    <div class="author">Alexandre Sette</div>
                    <div class="body">AJsdhjakhdja  asdgajsgdhjad as asjdhjakhadjsh as djashdja </div>
                    <div class="Vote Score">Vote Score: 2</div>
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
            </div>
        </div>)
    }
}

export default PostFormView
