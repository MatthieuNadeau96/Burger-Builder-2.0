import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be a functional component
  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li> );
      });
    return (
      <Aux>
        <h2 style={{borderBottom: '1px solid black', paddingBottom: '15px'}}>Your Order</h2>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <h4>Total Price: ${this.props.price.toFixed(2)}</h4>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button  btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
