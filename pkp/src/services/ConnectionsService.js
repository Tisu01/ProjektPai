import axios from 'axios';

const Connection_API_BASE_URL = "http://localhost:8080/api/connection/view";

class ConnectionService {

    getConnection(){
        return axios.get(Connection_API_BASE_URL);
    }

    getConnectionById(ConnectionId){
        return axios.get(Connection_API_BASE_URL + '/' + ConnectionId);
    }
/*
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }
 createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

*/
}
export default new ConnectionService()