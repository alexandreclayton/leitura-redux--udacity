import React from 'react';
import PropTypes from 'prop-types';
import {
    SelectField,
    MenuItem
} from 'material-ui';

export const Categories = ({ categories, categorySelected, floatingLabelText, name, style, labelStyle, errorText, showFirstElement, handleChange }) => (
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

Categories.defaultProps = {
    categories: []
    , categorySelected: 'all'
    , floatingLabelText: ''
    , name: ''
    , style: ''
    , labelStyle: ''
    , errorText: ''
    , showFirstElement: false
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired
    , categorySelected: PropTypes.string.isRequired
    , floatingLabelText: PropTypes.string
    , name: PropTypes.string
    , style: PropTypes.object
    , labelStyle: PropTypes.string
    , errorText: PropTypes.string
    , showFirstElement: PropTypes.bool
    , handleChange: PropTypes.func.isRequired
};