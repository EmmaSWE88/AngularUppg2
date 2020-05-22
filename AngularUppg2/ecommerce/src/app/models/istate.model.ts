import { IProduct } from './iproduct.model'

export interface IState {
    readonly productcatalog: Array<IProduct>
    readonly product: IProduct
    readonly shoppingcart: Array<IProduct>
}