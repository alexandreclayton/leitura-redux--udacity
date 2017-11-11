import PropTypes from 'prop-types';
export const If = ({ test, fail = false, children }) => (test ? children : fail);

If.propTypes = {
    test: PropTypes.bool.isRequired
    , children: PropTypes.element.isRequired
    , fail: PropTypes.element
};