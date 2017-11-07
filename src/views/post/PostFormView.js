import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Dialog,
    FlatButton,
    TextField,
    FloatingActionButton
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as Styles from '../../styles';
import { Categories } from '../../components';
import {
    rootOpenDialogAction
} from '../../actions/RootActions';
import {
    postHandleChangeAction
    , postChangeCategoryAction
    , postFormSaveAction
    , postFormCancelAction
} from '../../actions/PostActions';

class PostFormView extends Component {

    componentDidMount() {
        // Caso tenha ID buscar no servidor os dados para edição
    }

    render() {
        let { PostEntity, fieldsErros } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={() => this.props.postFormCancelAction()}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.props.postFormSaveAction(PostEntity)}
            />,
        ];

        return (
            <div>
                <FloatingActionButton
                    style={Styles.FormPostStyle.FabStyle}
                    onClick={() => this.props.rootOpenDialogAction(true)}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title={!PostEntity.id ? "New Post" : "Edit Post"}
                    actions={actions}
                    modal={true}
                    open={this.props.openDialogState}
                    onRequestClose={() => this.props.rootOpenDialogAction(false)}
                    autoScrollBodyContent={true}>
                    <div>
                        <TextField
                            name="title"
                            hintText="Post title"
                            floatingLabelText="Title"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            value={PostEntity.title}
                            errorText={fieldsErros.find((text)=>text === "title") ? "This field is required" : ""}
                            onChange={this.props.postHandleChangeAction}
                        /><br />
                        <TextField
                            name="body"
                            hintText="Post body"
                            floatingLabelText="Body"
                            floatingLabelFixed={true}
                            multiLine={true}
                            fullWidth={true}
                            errorText={fieldsErros.find((text)=>text === "body") ? "This field is required" : ""}
                            value={PostEntity.body}
                            onChange={this.props.postHandleChangeAction}
                        /><br />
                        <TextField
                            name="author"
                            hintText="Post Author"
                            floatingLabelText="Author"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            value={PostEntity.author}
                            errorText={fieldsErros.find((text)=>text === "author") ? "This field is required" : ""}
                            onChange={this.props.postHandleChangeAction}
                        /><br />
                        <Categories
                            name="category"
                            categories={this.props.categories}
                            floatingLabelText="Categories"
                            categorySelected={PostEntity.category}
                            errorText={fieldsErros.find((text)=>text === "category") ? "This field is required" : ""}
                            handleChange={this.props.postChangeCategoryAction}
                        /><br />
                    </div>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        openDialogState: state.RootReducer.openDialogState
        , categories: state.RootReducer.categories
        , PostEntity: state.PostReducer.PostEntity
        , fieldsErros: state.PostReducer.fieldsErros
    }
);

export default connect(mapStateToProps, {
    rootOpenDialogAction
    , postHandleChangeAction
    , postChangeCategoryAction
    , postFormSaveAction
    , postFormCancelAction
})(PostFormView);