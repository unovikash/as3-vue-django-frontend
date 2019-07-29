/* eslint-disable */
import axios from 'axios';
const API_URL = 'http://localhost:8000'; /* http://groyce.pythonanywhere.com/ or http://localhost:8000 */

export class APIService {
  constructor() {

  }

   getCustomer(param_pk) {
     const url = `${API_URL}/api/customers/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }

   getCustomerList() {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

  }

  addNewCustomer(customer){
   const url = `${API_URL}/api/customers/`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.post(url, customer, {headers: headers});
  }

  updateCustomer(customer){
    const url = `${API_URL}/api/customers/${customer.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, customer, {headers: headers});
  }

  deleteCustomer(customer_Pk){
     const url = `${API_URL}/api/customers/${customer_Pk}`;
     let jwtToken = localStorage.getItem('token');
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.delete(url, {headers: headers});
  }

  
  authenticateLogin(credentials) {
    const url = `${API_URL}/auth/`;
    return axios.post(url, credentials);
  }
}
