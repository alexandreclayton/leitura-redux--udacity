import React from 'react';
import {
    DropDownMenu,
    MenuItem
} from 'material-ui';
import * as Styles from '../styles';

export const Categories = ({ categories, categorySelected, handleChange }) => (
    <DropDownMenu
        labelStyle={Styles.MenuNavTopStyle.DropDownMenu_Color}
        maxHeight={300}
        value={categorySelected}
        onChange={(event, index, categorySelected) => handleChange(categorySelected)}>
        <MenuItem value="all" key="all" primaryText="Select" />
        {categories.map(i => (<MenuItem value={i.path} key={i.path} primaryText={i.name} />))}
    </DropDownMenu>
);