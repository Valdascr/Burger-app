import React, { Component } from 'react';
// import { History } from 'history';
import { RouteComponentProps } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

// interface ContactDataKey {
//   [key: string]: number;
// }

interface orderHandlerEvent {
  preventDefault: () => void;
}

interface checkValidityRules {
  required: any;
  minLength: number;
  maxLength: number;
}

// interface InputChangedEvent {
//   changed: () => void;
// }

interface CantactDataProps {
  ingredients: any;
  price: number;
  loading?: boolean;
  history: RouteComponentProps['history'];
  // orderForm: ContactDataKey;
}

// // Test Interface

// interface Config {
//   elementType: string;
//   elementConfig: {
//     type: string;
//     placeholder: string;
//   };
//   value: string;
//   validation: {
//     required: boolean;
//   };
//   valid: boolean;
//   touched: boolean;
// }

// interface ConfigZipCode {
//   elementType: string;
//   elementConfig: {
//     type: string;
//     placeholder: string;
//   };
//   value: string;
//   validation: {
//     required: boolean;
//     minLength?: number;
//     maxLength?: number;
//   };
//   valid: boolean;
//   touched: boolean;
// }

// interface ConfigDelivery {
//   elementType: string;
//   elementConfig: {
//     type: string;
//     options: [{ value: string; displayValue: string }[]];
//   };
//   value: string;
//   validation: {
//     required: boolean;
//     minLength: number;
//     maxLength: number;
//   };
//   valid: boolean;
//   touched: boolean;
// }

// // interface SignInFormProps {
// //   isSignIn: boolean;
// // }

// interface CantactDataProps {
//   ingredients: any;
//   history: RouteComponentProps['history'];
//   price: number;
//   // loading?: boolean;
//   orderForm: {
//     name: Config;
//     street: Config;
//     zipCode: ConfigZipCode;
//     country: Config;
//     email: Config;
//     deliveryMethod: ConfigDelivery;
//   };
//   formIsValid: boolean;
//   loading: boolean;
// }

// Test Interface

class ContactData extends Component<CantactDataProps> {
  constructor(props: CantactDataProps) {
    super(props);
  }
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: 'fastest',
        validation: true,
        valid: true,
        touched: true,
      },
    },
    formIsValid: false,
    loading: false,
  };

  orderHandler = (event: orderHandlerEvent) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] =
        this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price.toFixed(2),
      orderData: formData,
    };
    axios
      .post('orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  checkValidity(value: string, rules: checkValidityRules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (
    event: { target: { value: any } },
    inputIdentifier: string
  ) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key as keyof typeof this.state.orderForm],
      });

      // as keyof typeof this.state.orderForm
    }
    // let form = null;
    {
      /* <Input elemantType="..." elemantConfig="..." value="..." /> */
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data!!!!</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
