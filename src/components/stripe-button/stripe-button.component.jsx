import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IcfLcFucsSgDdOesFSTfmG8IagQhuSzz7Cv5MeA0fpSmhxdqz8Ha7vM5igvkjGFBPxVMQ6uM8UhkPhPdmr3aHeZ00hDaALLXy";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="eCommerce App"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
