import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:5002/amzn-cln-ed1f8/us-central1/api'
})

// http://127.0.0.1:5002/amzn-cln-ed1f8/us-central1/api