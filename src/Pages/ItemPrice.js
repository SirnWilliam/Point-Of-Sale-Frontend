import React, { Component } from 'react';
import "../CSS-Files/HomeCSS.css";
import Filter from '../Functions/Filter'
import Main from '../Functions/Main';
import POS from '../Functions/POS';
import Browser from '../Functions/Browser';
import Price from '../Functions/Price'

class ItemPrice extends Component  {
  render() {
    return (
      <div>
        <Filter show={true}/>
        <Main show={true}/> 
        <POS show={true}/>
        <Browser show={true}/>
        <Price show={true}/>
      </div>
    );
  }
}
export default ItemPrice;