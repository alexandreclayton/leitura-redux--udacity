import React from 'react';
import { Categories } from './Categories';
import * as Styles from '../styles';

export const MenuNavTop = ({ categories, categorySelected, handleChange }) => (
    <div>
        <label style={Styles.MenuNavTopStyle.Label}>Cetegorias:</label>
        <Categories
            categories={categories}
            categorySelected={categorySelected}
            handleChange={handleChange} />
    </div >
);

