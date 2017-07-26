import React, { Component } from 'react';
import './App.css';
import Product from './Product'
import products from '../data/Products'
import WelcomeComponent from './WelcomeComponent'
import {NavLink, Link, BrowserRouter, Route} from 'react-router-dom'
import Help from './Help'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemsInCart: 0,
      product: products[0]
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleProductSelection = this.handleProductSelection.bind(this)
  }
  handleAddToCart(number){
    this.setState({
      itemsInCart: this.state.itemsInCart+number
    })
  }
  handleProductSelection(product){
    this.setState({
      product: product
    })
  }
  render() {


    return (
      <BrowserRouter>
      <div className="wrapper">
        <header>
          <Link to="/"><h1>Shop here!</h1></Link>
          <div>
            {this.state.itemsInCart} [cart icon]
          </div>
        </header>

        <div className="main">

          <aside>
            <nav>

              <NavLink exact to="/">Home</NavLink>

              {
                products.map( (product) => <NavLink key={product.id} to={`/products/${product.id}`}>{product.name}</NavLink>)
              }

              <NavLink to="/help">Help</NavLink>

            </nav>
          </aside>

          <article>

              <div>
                <Route
                  exact
                  path={"/"}
                  component={WelcomeComponent}
                />
              <Route path={"/help"} component={Help} />
                <Route
                  path={"/products/:id"}
                  render={ ({match}) => {

                    const product = products.find( (product) => {
                      return product.id === parseInt(match.params.id, 10)
                    })

                    return <Product key={product.id} product={product} handleAddToCart={this.handleAddToCart} />
                  }}
                />
              </div>


          </article>

        </div>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
