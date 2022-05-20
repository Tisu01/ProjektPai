import axios from 'axios';

const Payment_API_BASE_URL = "http://localhost:8080/api/payment";

class PaymentService {

    createPayment(payment){
        return axios.post(Ticket_API_BASE_URL + '/add', payment);
    }

}
export default new PaymentService()