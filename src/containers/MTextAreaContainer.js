import React from 'react';

import {MTextArea} from '../components/MTextArea';

import {styles} from '../helpers/styles';


export class MTextAreaContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            focus: false
        }

        this.toggleFocus = this.toggleFocus.bind(this);
    }


    toggleFocus(){
        this.setState({focus: !this.state.focus});
    }

    render(){
    

    return (<MTextArea 
            style={styles.MTextAreaContainer}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            focus={this.state.focus}
            />
            );
    }
}