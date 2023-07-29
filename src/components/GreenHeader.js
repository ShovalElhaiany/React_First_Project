import React, {Component} from "react";

class GreenHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            green_header: this.props.greenHeader,
            color: props.color,
            clicks: 1,
            time: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        this.incrementFive = this.incrementFive.bind(this)
        this.setHeader = this.setHeader.bind(this);
    }
    
   

    componentDidMount () {
        document.title = `clicked ${this.state.clicks} times`;
        this.interval = setInterval(this.tick, 1000)
    }
    componentDidUpdate () {
        document.title = `clicked ${this.state.clicks} times`;
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({time: this.state.time + 1})
    }
    
    incrementCounter(){
        
        this.setState(prevState => ({
            clicks: prevState.clicks +1,
            color: "brown"
        }))
    };

    


    incrementFive() {
        this.setState(prevState => ({
            clicks: prevState.clicks +5,
            color: this.state.green_header
        }))
    }

    setHeader(event) {
        this.setState({
            green_header:event.target.value,
        })
    }

    render(){
        return (
            <div>
                <h1> seconds passed: {this.state.time}</h1>
                <h1 style={{color:this.state.color}}>{this.state.green_header}</h1>
                <input type={"text"} onChange={this.setHeader}/>
                <label>{this.state.clicks}</label>
                <br/>
                <button onClick={this.incrementCounter}>Click me</button>
                <button onClick={this.incrementFive}>+ 5</button>
            </div>
        );
    }
}
export default GreenHeader;