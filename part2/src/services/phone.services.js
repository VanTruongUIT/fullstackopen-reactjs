import axios from "axios";


const baseUrl = "http://localhost:3001/phones";


const create = (phoneObj) => {
  // axios.post() => return a new promise, so now request variable is the promise instance
  const request = axios.post(baseUrl, phoneObj);

  // request.then -> to get data from promise return. to get data from promise return we .data.
  // but this is also the promise again. So, when the place that call create function -> this need to .then() function to get the data of post request.
  return request.then(response => response.data);
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    console.log(`response from getAll ${response.data}`);
    return response.data;
  });
}

export default {create, getAll};