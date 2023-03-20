import Configuration from 'Configuration';
import { isJsonString } from 'Utilities'

const {API_HOST} = Configuration;

export async function loginUser(email, password) {
  var formData = new FormData();

  formData.append('action', 'login');
  formData.append('email', email);
  formData.append('password', password);
  
  return { userId: 29, token: "sefg34fhj" }
  // return makeRequest(formData)
}

export async function checkSession(token) {
  var formData = new FormData();

  formData.append('action', 'authenticate');
  formData.append('token', token);
  
  return { userId: 29, token: "sefg34fhj" }

  // return makeRequest(formData)
}

export async function registerUser(username, email, password) {
  var formData = new FormData();

  formData.append('action', 'register');
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password', password);
  
  return "User successfully registered";
  // return makeRequest(formData)
}

export async function resetPassword(email) {
  var formData = new FormData();

  formData.append('action', 'forgotpassword');
  formData.append('email', email);
  
  return "Password request successfully made";
  // return makeRequest(formData)
}

async function makeRequest(formData) {
  var data;

  try {
    const res = await fetch(`${API_HOST}`, {
      method: 'POST',
      body: formData,
    });
    data = await res.json();
  } catch (error) {
    throw 'Something went wrong. Please try again later';
  }
  
  if (data.error) {
    throw data.error;
  } else {
    return isJsonString(data.content) ? JSON.parse(data.content) : data.content;
  }
}
  