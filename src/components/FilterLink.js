import React, { Component } from 'react'

class FilterLink extends Component {
  filter() {
    this.props.dispatch(  )
  }


  render() {
    return (
      <a href="#/active" onClick={this.filter()} className="">All</a>
    )
  }
}

export default FilterLink
