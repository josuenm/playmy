import axios from 'axios';

const PRODUCTS_URL = String(process.env.REACT_APP_PRODUCTS_API_URL)



export const api = {
    getProducts: async () => await axios.get(PRODUCTS_URL),
}
