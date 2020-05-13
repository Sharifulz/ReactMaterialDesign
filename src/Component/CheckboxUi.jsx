import React, {Component} from 'react'
import Checkbox from '@material-ui/core/Checkbox';

class CheckboxUi extends Component{
    render(){
        return(
            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }}/>
        );
    }
}

export default CheckboxUi;