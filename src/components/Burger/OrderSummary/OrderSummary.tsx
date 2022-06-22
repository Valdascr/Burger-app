import React, { Component } from 'react';
import Auxl from '../../../hoc/Auxl';
import Button from '../../UI/Button/Button';

interface OrderSummaryKey {
  [key: string]: number;
}

interface OrderSummaryProps {
  ingredients: OrderSummaryKey;
  purchaseCancelled: () => void;
  purchaseContinued: () => void;
  price: number;
}

class OrderSummary extends Component<OrderSummaryProps> {
  constructor(props: OrderSummaryProps) {
    super(props);
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Auxl>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxl>
    );
  }
}
export default OrderSummary;
