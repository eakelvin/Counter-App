import { Component, useState } from "react"

class Count extends Component {
    constructor() {
        super()
        this.state={
            count:0
        }
    }
        state={count:0}
    
         res = () => {
            this.setState({count:this.state.count=0})
        }
    
         inc = () => {
            this.setState( (prevstate =>({count:prevstate.count+5})) )
        }
    
         dec = () => {
            this.setState( (prevstate =>({count:prevstate.count-5})) )
        }
    
    
    render(){
        return (
            <div>
                <div className = "container">
                <h1 className= "App-header">Simple Counter App</h1>
                <div className="ct">
                    <p id="diff">Counter - {this.state.count}</p>
                </div>
    
                <button onClick={this.res}>Reset</button>
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.dec}>Decrement</button>
                </div>
    
            </div>
        )
    }
        
    }


export default Count;
