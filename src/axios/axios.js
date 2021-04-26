import axios from 'axios'

export const instance = axios.create({
  // baseURL: 'https://us-central1-amzn-cln-ed1f8.cloudfunctions.net/api'
  baseURL: 'http://127.0.0.1:5001/amzn-cln-ed1f8/us-central1/api'
  // 'http://127.0.0.1:5001/amzn-cln-ed1f8/us-central1/api',
  // headers: {''}
})

// http://127.0.0.1:5002/amzn-cln-ed1f8/us-central1/api
// https://us-central1-amzn-cln-ed1f8.cloudfunctions.net/api