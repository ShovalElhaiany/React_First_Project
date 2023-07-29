import React, {Component} from "react";

class GreenHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            component_name:"GreenHeader",
            color:props.color
        }
    }
    render (){
        return (
            <h1 style={{color: this.state.color}}> {this.props.greenHeader} </h1>
        );
    }
}

export default GreenHeader;