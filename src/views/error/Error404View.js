import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { MenuNavTop } from '../../components';
class Error404View extends Component {
    render() {
        return (
            <div>
                <MenuNavTop title="Error 404..."
                    useToobar={false}
                    handleChangeCategory={() => null}
                    handleChangeSort={() => null} />
            </div>
        );
    }
}

export default withRouter(Error404View)

