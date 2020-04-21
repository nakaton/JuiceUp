import React from 'react';
import './App.css';
import TopMenu from './containers/top-menu/top-menu'
import Categories from './containers/categories/categories'
import Products from './containers/products/products'
import NavFooter from './containers/nav-footer/nav-footer';

function App() {
  return (
    <div className="App">
      <div className="TopSection">
        <TopMenu/>
        <Categories/>
      </div>
      <Products/>
      <NavFooter className="NavPosition"/>
    </div>
  );
}

export default App;
