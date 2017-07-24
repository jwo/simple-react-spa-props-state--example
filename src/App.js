import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>Shop here!</h1>
          <div>
            0 [cart icon]
          </div>
        </header>

        <div className="main">

          <aside>
            <nav>
              <a href="/">Home</a>
              <a href="/">Products</a>
              <a href="/">Help</a>
            </nav>
          </aside>

          <article>
            <h2>Coffee Mug</h2>

            <div className="details">

              <img src="http://i3.cpcache.com/product/311985253/worlds_best_boss_mug.jpg?side=Back&color=White&height=460&width=460&qv=90"/>

              <div>
                <dl>
                  <dt>Price</dt>
                  <dd>$9.95</dd>
                  <dt>Description</dt>
                  <dd>Give this mug as a gift that fits a fav hobby with unique artwork</dd>
                </dl>

                <button>Add To Cart</button>
                
              </div>
            </div>

          </article>

        </div>

      </div>
    );
  }
}

export default App;
