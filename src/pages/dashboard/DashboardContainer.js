import React from 'react';

//component ui
import DashboardUI from './Dashboard.js';

//context
import UserContext from '../../context/UserContext.js';

// custom hooks
import {useShowDataFirestore} from '../../hooks/useShowDataFirestore.js';

const DashboardContainer = (props) => {
    const [showPosts] = useShowDataFirestore();

    let uid = props.match.params.id;
    let disabled = uid === '1' ? false : true;

    return(
        <UserContext.Provider value={disabled}>
            <DashboardUI
                showPosts = {showPosts}
            />
        </UserContext.Provider>
    )
}

export default DashboardContainer;