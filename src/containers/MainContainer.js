import React from 'react';

import {MTextAreaContainer} from '../containers/MTextAreaContainer';
import {MResultAreaContainer} from '../containers/MResultAreaContainer';

import {styles} from '../helpers/styles.js';

export class MainContainer extends React.Component{
    render()
    {
        return (
        <div id='mainContainer' style={styles.MainContainer}>
            <MTextAreaContainer />
            <MResultAreaContainer />
        </div>);
    }
}
