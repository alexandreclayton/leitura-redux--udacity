import React from 'react';
import { MenuItem, SelectField } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Categories } from './Categories';

export const MenuNavTop = ({ categories, categorySelected, sortSelected, changeCategory, changeSort }) => (
    <Toolbar>
        <ToolbarGroup>
            <ToolbarTitle text="Categories:" />
            <Categories
                categories={categories}
                categorySelected={categorySelected}
                handleChange={changeCategory}
                showFirstElement={true} />
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolbarTitle text="Sort:" />
            <SelectField value={sortSelected} onChange={(event, index, sortSelected) => changeSort(sortSelected)}>
                <MenuItem value={'-voteScore'} primaryText="Vote Score" />
                <MenuItem value={'-timestamp'} primaryText="Date" />
            </SelectField>
        </ToolbarGroup>
    </Toolbar>
);

