import React from 'react';
import marked from 'marked';

import {styles} from '../helpers/styles';


export class MResultAreaContainer extends React.Component{
   
   
    render(){
        return (<div  
                style={styles.MResultAreaContainer}>
            <span id='preview'
                dangerouslySetInnerHTML={this.props.htmlCode} />
        </div>);
    }
}