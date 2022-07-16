import axios from "axios";


const baseUrl = "http://localhost:3001/phones";


const create = (phoneObj) => {
  console.log(`phone object: ${phoneObj}`);
  // axios.post() => return a new promise, so now request variable is the promise instance
  const request = axios.post(baseUrl, phoneObj);

  // request.then -> to get data from promise return. to get data from promise return we .data.
  // but this is also the promise again. So, when the place that call create function -> this need to .then() function to get the data of post request.
  
  return request.then(response => {
    console.log(`create new phone: ${response.data.name} ${response.data.number}`);
    return response.data;
  });
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    console.log(`response from getAll ${response.data}`);
    return response.data;
  });
}

const deletePhoneObjById = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => {
    console.log(`delete successfully phonebook`);
    return response.data;
  });
}

const updatePhone = (id, newPhone) => {
  const request = axios.put(`${baseUrl}/${id}`, newPhone);
  return request.then(response => {
    console.log(`update phonebook successfully`);
    return response.data;
  })
}

export default {create, getAll, deletePhoneObjById, updatePhone};