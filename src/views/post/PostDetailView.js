import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

class PostFormView extends Component {
    render() {
        return (<AppBar title="Detail" iconElementLeft={<IconButton><HardwareKeyboardArrowLeft /></IconButton>} />)
    }
}

export default PostFormView
