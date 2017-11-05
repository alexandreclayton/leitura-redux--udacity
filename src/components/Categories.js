import React from 'react';
import {
    SelectField,
    MenuItem
} from 'material-ui';

export const Categories = ({ categories, categorySelected, handleChange, floatingLabelText, name, style, labelStyle, errorText, showFirstElement }) => (
    <SelectField
        name={name}
        style={style}
        labelStyle={labelStyle}
        floatingLabelText={floatingLabelText}
        maxHeight={300}
        autoWidth={true}
        value={categorySelected}
        errorText={errorText}
        onChange={(event, index, categorySelected) => handleChange(categorySelected)}>
        {showFirstElement ? <MenuItem value="all" key="all" primaryText="All" /> : null}
        {categories.map(i => (<MenuItem value={i.path} key={i.path} primaryText={i.name} />))}
    </SelectField>
);