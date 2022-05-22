import React, {useState} from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import TicketService from "../services/ticketService";


function Payment() {

const [count, setCount] = useState(TicketService.getCurrentTicketPrize());


async function handleToken(token) {



console.log(token);

await axios.post("http://localhost:8080/api/payment/charge", "", {         headers: {
  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
//  'Origin': 'http://localhost:3000',

  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Access-Control-Allow-Credentials': 'true',
 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  token: token.id,
  amount: count,
},}).then(() => {
   alert("Payment Success");
   }).catch((error) => {
   alert(error);
   });

     this.props.navigate('/tickets');


//   await axios.get("http://localhost:8080/api/ticket/all", "", {         headers: {
//     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
//   },}).then( res => {
//      let ticket = res.data
//        prize = ticket.prize;
//      }).catch((error) => {
//      alert(error);
//      });


}



return (


<div className="App">
<div id="wrapper">
 <div className="row" id="rowMain">
 <div className="col-xs-6" style={{margin: '2%'}}>

       <div className="City"  style={{color: '#00a34f', margin: '0 auto' , fontSize: '24px'}}>Prize: {count}</div>
         </div>

 </div>
 <br/>
<Stripe
stripeKey="pk_test_51L0tcuHbs9mbbaHWBmtC3PDMtfEI8UK17Oel7r5rzL4gcVz8AqvqC1qXxyA0vuzqR64gt8PzMu6Y0wiRvkFxRQdl00SRDq2QOs"
token={handleToken}
/>
</div>
</div>
);
}
export default Payment;