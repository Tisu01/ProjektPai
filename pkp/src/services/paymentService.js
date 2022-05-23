import axios from 'axios';

const Payment_API_BASE_URL = "http://localhost:8080/api/payment";

class PaymentService {

    createPayment(payment){
        return axios.post(Payment_API_BASE_URL + '/add', payment).then(response => {
             localStorage.setItem("payment", JSON.stringify(response.data));
              return response.data;
           });
    }

    getCurrentPaymentId() {
                  return JSON.parse(localStorage.getItem('payment')).id;
        }

}
export default new PaymentService()