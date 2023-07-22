//import { type } from "os"
export type Pizza = {
    _id: number,
    _createdAt: Date,
    name: string,
    slug: string,
    image: string,
    smallPrice: number,
    mediumPrice: number,
    largePrice: number,
    description: string,
    toppings: Topping[]
}
export type Topping = {
    image: string,
    name: string,
    price: number
}
export type CartItemsType = {
    id: number,
    image: string,
    name: string,
    price: number,
    size: string,
    crust: string,
    additionalToppings: Topping[],
    amount?: number
}