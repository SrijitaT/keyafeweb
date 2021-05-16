import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#303238",
        fontSize: "16px",
        fontFamily: "sans-serif",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "#CFD7DF"
        }
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238"
        }
      }
    }
  };
  
  function CardSection() {
    return (
        <>
        <label>Card details </label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        </>
     
    );}

function InjectedPaymentForm() {
    return (
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <PaymentForm stripe={stripe} elements={elements} />
        )}
      </ElementsConsumer>
    );
  }


class PaymentForm extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();
    // handle payment request
    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }
  
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
      // pass the token to your backend API
    }
  };

  render() {
    return (
            <form onSubmit={this.handleSubmit}>
                <CardSection />
                <button className="btn-pay">Buy Now</button>
            </form>
    );
  }
}

export default InjectedPaymentForm;