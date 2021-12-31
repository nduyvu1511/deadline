import HTTPRepository from './http';

export interface CartPutObj {
    cartId: string;
    data: object;
}

class CartApi extends HTTPRepository {}

export default new CartApi('carts');
