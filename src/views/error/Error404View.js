import React from 'react';
import PropTypes from 'prop-types';
import { MenuNavTop } from '../../components';

export const Error404View = ({ location }) => (
    <div>
        <MenuNavTop title="Error 404..."
            useToobar={false}
            handleChangeCategory={() => null}
            handleChangeSort={() => null} />
        <div>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    </div>
)

Error404View.defaultProps = {
    location: {}
};

Error404View.propTypes = {
    location: PropTypes.object.isRequired
};