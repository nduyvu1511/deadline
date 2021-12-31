import { createAsyncThunk } from '@reduxjs/toolkit'
import productApi from '../../services/productApi'
import { Product, ProductPagination } from './Interface'

interface Products {
  data: Product[]
  totalProducts: number
  pagination?: ProductPagination
}

const fetchProductsWithQuery = createAsyncThunk<Products, string>(
  'products/fetchWithQuery',
  async (query: string) => {
    try {
      const response = await productApi.getAllWithQuery(query)
      return response.data
    } catch (error) {
      throw error
    }
  }
)

const fetchOneProduct = createAsyncThunk<Product, string>(
  'products/fetchOneProduct',
  async (id: string) => {
    try {
      const response = await productApi.getOne(id)
      return response.data
    } catch (error) {
      throw error
    }
  }
)

export { fetchProductsWithQuery, fetchOneProduct }
