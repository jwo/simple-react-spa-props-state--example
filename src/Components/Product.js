import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props){
    super(props)

    this.state = {
      buttonText: 'Add To Cart',
      buttonIsDisabled: false,
      quantity: 20
    }

    this.disableButton = this.disableButton.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)

  }

  handleQuantityChange(event){
    this.setState({
      quantity: parseInt(event.target.value, 10)
    })
  }

  disableButton(){
    this.setState({
      buttonText: "Added To Cart",
      buttonIsDisabled: true
    })
  }
  handleButtonClick(){
    this.disableButton()
    this.props.handleAddToCart(this.state.quantity)
  }
  render(){
    return <div>
      <h2>{this.props.product.name}</h2>

      <div className="details">

        <img src={this.props.product.img} alt={this.props.product.text}/>

        <div>
          <dl>
            <dt>Price</dt>
            <dd>{this.props.product.price}</dd>
            <dt>Description</dt>
            <dd>{this.props.product.description}</dd>


          <dt><label>Quantity</label></dt>
          <dd>
            <select value={this.state.quantity} onChange={this.handleQuantityChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={20}>20</option>
            </select>
          </dd>

          </dl>

          <button
            disabled={this.state.buttonIsDisabled}
            onClick={this.handleButtonClick} >
            {this.state.buttonText}
          </button>

        </div>
      </div>
    </div>
  }
}
