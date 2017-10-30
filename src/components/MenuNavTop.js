import React from 'react';
import {
    DropDownMenu,
    MenuItem
} from 'material-ui';
import * as Styles from '../styles';

export const MenuNavTop = ({ categories, categorySelected, handleChange }) => (
    <div>
        <label style={Styles.MenuNavTopStyle.DropDownMenu_Label}>Cetegorias:</label>
        <DropDownMenu
            labelStyle={Styles.MenuNavTopStyle.DropDownMenu_Color}
            maxHeight={300}
            value={categorySelected}
            onChange={(event, index, categorySelected) => handleChange(categorySelected)}>
            <MenuItem value="all" key="all" primaryText="All" />
            {categories.map(i => (<MenuItem value={i.path} key={i.path} primaryText={i.name} />))}
        </DropDownMenu>
    </div >
);