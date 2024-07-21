// used to get data from api

import axios from 'axios'

const API_URL = "http://127.0.0.1:8000/api"

export const fetchProducts = async (filters) => {

  //category=1%2C2&price_min=&price_max=
  const category_ids = filters.categories.join(',')
  const price_min = filters.price_range[0]
  const price_max = filters.price_range[1]

  const params = {
    category: category_ids ,
    price_min: price_min , 
    price_max: price_max , 
  }

  const response = await axios.get(`${API_URL}/products/`,{params})
  return response.data

}

export const fetchCategory = async () => {
  const response = await axios.get(`${API_URL}/category/`)
  return response.data
  
}
