import React, { Component } from 'react'

 class Classcomponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'click me plus'
      }
    }
    
    clickHandler=()=>{
        this.setState({
            message: 'googdasf!'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>clike me</button>
      </div>
    )
  }
}
export default Classcomponents