import React, { Component } from 'react';

import Auxl from '../../hoc/Auxl';
import Burger from '../../components/Burger/Burger';
// import { any } from 'prop-types';

// interface BurgerBuilderIngredients {
//   ingredients: number;
// }

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };
  render() {
    return (
      <Auxl>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxl>
    );
  }
}

export default BurgerBuilder;
