import React from 'react';
import marked from 'marked';

import {MTextAreaContainer} from '../containers/MTextAreaContainer';
import {MResultAreaContainer} from '../containers/MResultAreaContainer';

import {styles} from '../helpers/styles.js';

export class MainContainer extends React.Component{
    
    constructor(props)
    {
        super(props);

        this.state = {
            results: {__html: <p></p>}
        }

        this.updateResults = this.updateResults.bind(this);
    }
    
    updateResults(str)
    {
        let rawMarkup = marked(str,
            {sanitize: true});

        this.setState({results: {__html: rawMarkup}});

    }

    
    render()
    {
        return (
        <div id='mainContainer' style={styles.MainContainer}>
            <MTextAreaContainer updateResults={this.updateResults}/>
            <MResultAreaContainer htmlCode={this.state.results}/>
        </div>);
    }
}
