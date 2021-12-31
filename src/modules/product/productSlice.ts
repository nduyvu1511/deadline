import { createSlice } from '@reduxjs/toolkit'
import { Product, ProductPagination } from './Interface'
import { fetchOneProduct, fetchProductsWithQuery } from './productThunk'

export interface Products {
  products: {
    data: Product[]
    pagination?: ProductPagination
    totalProducts: number
    isLoading: boolean
  }
  product: {
    data: Product
    isLoading: boolean
  }
}

const initialState: Products = {
  products: {
    data: [],
    pagination: { current: 0 },
    isLoading: false,
    totalProducts: 0,
  },
  product: {
    data: {} as Product,
    isLoading: false,
  },
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get product list
    builder.addCase(fetchProductsWithQuery.pending, (state) => {
      state.products.isLoading = true
    })
    builder.addCase(fetchProductsWithQuery.fulfilled, (state, { payload }) => {
      state.products.isLoading = false
      state.products.data = payload.data
      state.products.pagination = payload.pagination
      state.products.totalProducts = payload.totalProducts
    })

    // Get one product
    builder.addCase(fetchOneProduct.fulfilled, (state, { payload }) => {
      state.product.isLoading = false
      state.product.data = payload
    })
  },
})

export default productSlice.reducer
