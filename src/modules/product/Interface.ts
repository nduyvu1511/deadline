export interface SubItem {
  _id: string
  name: string
}

export interface Price {
  onSalePrice?: number
  regularPrice: number
}

export interface Variation {
  colorId: string
  sizeId: string
  SKU?: string
  price: Price
  stock: number
}

export interface colorProduct {
  _id: string
  name: string
  images: Array<string>
}

export interface Product {
  _id: string
  title: string
  desc: string
  categories: SubItem[]
  rate: number
  sizes: SubItem[]
  colors: colorProduct[]
  variations: Variation[]
}

export interface ProductPagination {
  prev?: number
  current: number
  first?: number
  last?: number
  next?: number
}
