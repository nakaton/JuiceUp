import React from 'react';
import './App.css';
import TopMenu from './containers/top-menu/top-menu'
import Categories from './containers/categories/categories'
import Products from './containers/products/products'

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <Categories/>
      <Products/>
    </div>
  );
}

export default App;
