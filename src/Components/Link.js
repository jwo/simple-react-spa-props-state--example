import React, { Component } from 'react';

export default class Link extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.onClick(this.props.product)
  }
  render(){
    return <a onClick={this.handleClick}>
      {this.props.product.name}
    </a>
  }
}
