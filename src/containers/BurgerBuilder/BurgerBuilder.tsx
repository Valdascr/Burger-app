import React, { Component } from 'react';

import Auxl from '../../hoc/Auxl';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

interface Props {}

interface BurgerBuilderIngredients {
  ingredients?: any;
  totalPrice?: number;
  // oldPrice?: number | any;
  price?: number | any;
}

interface IngredientsObjectsKeys {
  [key: string]: number;
}

const INGREDIENT_PRICES: IngredientsObjectsKeys = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component<Props, BurgerBuilderIngredients> {
  constructor(props: BurgerBuilderIngredients) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
    };
  }

  addIngredientHandler = (type: string) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type: string) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    // {salad: true, meat: false, ...}
    return (
      <Auxl>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Auxl>
    );
  }
}

export default BurgerBuilder;
