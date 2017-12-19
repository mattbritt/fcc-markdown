import React from 'react';
//import marked from 'marked';

import {styles} from '../helpers/styles';

let focusStyle = { borderColor:'black'};

let str =  
"Header\n\
=======\n\n\
Sub-heading\n\
---------\n\n\
### Another deeper heading\n\n\
Paragraphs are separated by a blank line.\n\n\
Leave 2 spaces at the end of a line to do a  \n\
line break.\n\n\
Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~.\n\n\
Shopping list:\n\n\
* apples\n\
* oranges\n\
* pears\n\n\
Numbered list:\n\n\
1. apples\n\
2. oranges\n\
3. pears\n\n\
The rain--not the reign--in\n\
Spain.\n\n\
*[Herman Fassett](https://freecodecamp.com/hermanfassett)*";



export class MTextArea extends React.Component{
    
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.props.updateResults(event.target.value);
    }
    
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
        <textarea id='editor'
            autoFocus 
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
                    style={{...styles.MTextArea,...focusStyle}}
            onChange={this.handleChange} defaultValue={str}>
        </textarea> 
        );
    }

componentDidMount()
{
    this.props.updateResults(str);
}

}