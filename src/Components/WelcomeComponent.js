import React, { Component } from 'react';
import products from '../data/Products'
import {Link} from 'react-router-dom'

export default class WelcomeComponent extends Component {
  render(){
    return (
      <div>
        <h1>Welcome!</h1>

        {products.map( product => {
          return <div key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </div>
        })}
      </div>
    )
  }
}
