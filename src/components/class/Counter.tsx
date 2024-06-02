import { Component } from 'react'
//In class components, we only need to type the PROPS and STATEs
type CounterProps ={
    message: string;
}

type CounterState = {
    count: number;
}

export default class Counter extends Component<CounterProps, CounterState> {
    state = {
      count: 0,
    }

    handleClick = () =>{
        this.setState((prevState)=>({
          count: prevState.count + 1,
        }))
  
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} - {this.state.count}
      </div>
    )
  }
}
