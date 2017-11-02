import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Dialog,
    FlatButton,
    TextField
} from 'material-ui';
import { Categories } from '../../components';

import {
    rootOpenDialogAction
} from '../../actions/RootActions';

class PostFormView extends Component {

    componentDidMount() {
        // Caso tenha ID buscar no servidor os dados para edição
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={() => this.props.rootOpenDialogAction(false)}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.props.rootOpenDialogAction(false)}
            />,
        ];

        return (
            <Dialog
                title="Manage post"
                actions={actions}
                modal={true}
                open={this.props.openDialogState}
                onRequestClose={() => this.props.rootOpenDialogAction(false)}
                autoScrollBodyContent={true}>
                <div>
                    <TextField
                        hintText="Post title"
                        floatingLabelText="Title"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <TextField
                        hintText="Post body"
                        floatingLabelText="Body"
                        floatingLabelFixed={true}
                        multiLine={true}
                        fullWidth={true}
                    /><br />
                    <TextField
                        hintText="Post Author"
                        floatingLabelText="Author"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <Categories
                        categories={this.props.categories}
                        floatingLabelText="Categories"
                        categorySelected={null}
                        handleChange={null}
                        fullWidth={true}
                    /><br />
                    <TextField
                        disabled={true}
                        hintText="Vote Score"
                        floatingLabelText="Vote Score"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                </div>
            </Dialog>
        )
    }
}

const mapStateToProps = state => (
    {
        openDialogState: state.RootReducer.openDialogState
        , categories: state.RootReducer.categories
    }
);

export default connect(mapStateToProps, {
    rootOpenDialogAction
})(PostFormView);