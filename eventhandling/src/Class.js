import React, { Component } from 'react'

 class Class extends Component {
    handleClick(){
        alert("button is clicked")
    }
    render() {
    return (
      <div>
        <button onClick={this.handleClick}>clicke me</button>
      </div>
    )
  }
}

export default Class