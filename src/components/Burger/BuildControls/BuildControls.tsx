import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

interface BuildControlsProps {
  price: number;
  ingredientAdded: (val: string) => void;
  ingredientRemoved: (val: string) => void;
  disabled: boolean | any;
}

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

// console.log(typeof controls);

const buildControls = (props: BuildControlsProps) => (
  <div className={classes.BuildControls}>
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button>ORDER NOW</button>
  </div>
);
export default buildControls;
