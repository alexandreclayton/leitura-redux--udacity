import React from 'react';
import { Dialog, FlatButton } from 'material-ui';

export const ConfirmDialog = ({ title, content, open, handleOk, handleCancel }) => {
    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={handleCancel}
        />,
        <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onClick={handleOk}
        />,
    ];
    return (
        <Dialog
            title={title}
            actions={actions}
            modal={false}
            open={open} >
            {content}
        </Dialog>
    );
}