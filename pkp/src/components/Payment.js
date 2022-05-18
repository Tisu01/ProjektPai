import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
function Payment() {
async function handleToken(token) {
console.log(token);
await axios.post("http://localhost:8080/api/payment/charge", "", {         headers: {
  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
  token: token.id,
  amount: 2,
},}).then(() => {
   alert("Payment Success");
   }).catch((error) => {
   alert(error);
   });
}
return (
<div className="App">
<Stripe
stripeKey="pk_test_51L0tcuHbs9mbbaHWBmtC3PDMtfEI8UK17Oel7r5rzL4gcVz8AqvqC1qXxyA0vuzqR64gt8PzMu6Y0wiRvkFxRQdl00SRDq2QOs"
token={handleToken}
/>
</div>
);
}
export default Payment;