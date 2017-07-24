import React, { Component } from 'react';
import './App.css';
import Product from './Product'
import Link from './Link'

const products = [
  {
    id: 1,
    name: "Coffee Mug",
    img: "http://i3.cpcache.com/product/311985253/worlds_best_boss_mug.jpg?side=Back&color=White&height=460&width=460&qv=90",
    price: "$9.95",
    description: "Give this mug as a gift that fits a fav hobby with unique artwork"
  },
  {
    id: 2,
    name: "Wand",
    img: "http://vignette1.wikia.nocookie.net/harrypotter/images/0/03/Hermione_Granger_wand.png/revision/latest?cb=20161128052650",
    price: "25",
    description: "Hermione_Granger_wand"
  },
  {
    id: 3,
    name: "Hat",
    img: "http://2.bp.blogspot.com/-UXAFoYpmGQs/Vmr07-to0MI/AAAAAAAAAX0/m2PG7o8Mtzw/s1600/Gandalf%2BHobbit.jpg",
    price: "6",
    description: "Gandalf included"
  }
]


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
      <div className="wrapper">
        <header>
          <h1>Shop here!</h1>
          <div>
            {this.state.itemsInCart} [cart icon]
          </div>
        </header>

        <div className="main">

          <aside>
            <nav>
              <a href="/">Home</a>
              {
                products.map( (product) => <Link key={product.id} onClick={this.handleProductSelection} product={product} />)
              }

              <a href="/">Help</a>
            </nav>
          </aside>

          <article>
            <Product key={this.state.product.id} product={this.state.product} handleAddToCart={this.handleAddToCart}/>
          </article>

        </div>

      </div>
    );
  }
}

export default App;
