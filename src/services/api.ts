import axios from 'axios';


type ProductProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    score: number;
}

export const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export function getProducts() {
    return axios.get('http://localhost:3000/api/products')
}

export async function findProduct(oldValue: string) {

    let value = oldValue.toLowerCase();
    let products = await getProducts()

    if(value === '') return products.data

    let newListOfProducts = products.data.map((product: ProductProps) => {

        if(product.name.toLowerCase().includes(value)) return product

        else return undefined
    })

    console.log(newListOfProducts)

    return newListOfProducts
}