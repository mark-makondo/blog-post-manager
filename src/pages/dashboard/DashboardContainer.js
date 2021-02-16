import React from 'react';

//component ui
import DashboardUI from './Dashboard.js';

//context
import UserContext from '../../context/UserContext.js';

const DashboardContainer = (props) => {
    let uid = props.match.params.id;
    let disabled = uid === '1' ? false : true;

    return(
        <UserContext.Provider value={disabled}>
            <DashboardUI/>
        </UserContext.Provider>
    )
}

export default DashboardContainer;