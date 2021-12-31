import axiosClient from '.'

export interface IPutObject {
  cartId: string
  data: object
}

class HTTPRepository {
  url: string
  private query?: string

  constructor(url: string) {
    this.url = url
  }

  getOne = (id: string) => {
    return axiosClient.get(`${this.url}/${id}`)
  }

  getAll = () => {
    return axiosClient.get(this.url)
  }

  getAllWithQuery = (query: string) => {
    return axiosClient.get(`${this.url}${query}`)
  }

  post = (data: object) => {
    return axiosClient.post(this.url, data)
  }

  put = (putObject: IPutObject) => {
    return axiosClient.put(`${this.url}/${putObject.cartId}`, putObject.data)
  }

  delete = (id: string) => {
    return axiosClient.delete(`${this.url}/${id}`)
  }
}

export default HTTPRepository
