import React from 'react';

import {styles} from '../helpers/styles';

let focusStyle = { borderColor:'black'};

export class MTextArea extends React.Component{
    render(){

        if(this.props.focus === true)
        {
            focusStyle = {  borderColor:'rgba(50,150,255,1)',
                           boxShadow:'0 0 8px rgba(50,150, 255, 1)'
                };
        }
        else
        {
            focusStyle = {borderColor: '#555555'};
        }

        return (
        <textarea 
            autoFocus 
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
                    style={{...styles.MTextArea,...focusStyle}} >
        </textarea>
        );
    }
}