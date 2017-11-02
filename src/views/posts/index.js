import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Categories } from '../../components';

class PostFormView extends Component {

    componentDidMount() {
        // Caso tenha ID buscar no servidor os dados para edição

    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={this.cancel}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onClick={this.save}
            />,
        ];

        return (
            <Dialog
                title="Manage post"
                actions={actions}
                modal={true}
                open={true}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}>
                <div>
                    <TextField
                        hintText="Post title"
                        floatingLabelText="Title"
                        floatingLabelFixed={true}
                    /><br />
                    <TextField
                        hintText="Post body"
                        floatingLabelText="Body"
                        floatingLabelFixed={true}
                        multiLine={true}
                    /><br />
                    <TextField
                        hintText="Post Author"
                        floatingLabelText="Author"
                        floatingLabelFixed={true}
                    /><br />
                    <Categories
                        categories={categories}
                        categorySelected={categorySelected}
                        handleChange={handleChange}
                    /><br />
                    <TextField
                        disabled={true}
                        hintText="Vote Score"
                        floatingLabelText="Vote Score"
                        floatingLabelFixed={true}
                    /><br />
                </div>
            </Dialog>
        )
    }
}