import React from 'react';
import {
    SelectField,
    MenuItem
} from 'material-ui';
import * as Styles from '../styles';

export const Categories = ({ categories, categorySelected, handleChange, floatingLabelText, name }) => (
    <SelectField
        name={name}
        style={Styles.MenuNavTopStyle.Size}
        labelStyle={(!name ? Styles.MenuNavTopStyle.Color : null)}
        floatingLabelText={floatingLabelText}
        maxHeight={300}
        autoWidth={true}
        value={categorySelected}
        onChange={(event, index, categorySelected) => handleChange(categorySelected)}>
        <MenuItem value="all" key="all" primaryText="Select" />
        {categories.map(i => (<MenuItem value={i.path} key={i.path} primaryText={i.name} />))}
    </SelectField>
);