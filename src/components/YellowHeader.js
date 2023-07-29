import { click } from "@testing-library/user-event/dist/click";
import React, {Component} from "react";

class YellowHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            component_name: props.name,
            component_color: props.color,
            clicks: 1
        }
        this.incrementCounter = this.incrementCounter.bind(this)
    };

    incrementCounter = () => {
        this.setState({clicks: this.state.clicks + 1 })
    };

    render(){
        return (
            <div>
                <h1 style={{color:this.state.component_color}}> {this.state.component_name} </h1>
                <label>{this.state.clicks}</label>
                <br/>
                <button onClick={this.incrementCounter}> Click My </button>
            </div>
        );
    }
}

export default YellowHeader;