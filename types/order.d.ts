export type Order = {
    _id: string,
    _createdAt: Date,
    userInfo: OrderUserInfo
    total: number,
    status: number
}
export type OrderUserInfo = {
    firstName: string,
    lastName: string,
    phone: string,
    anotherPhone: string,
    streetName: string,
    streetNo: number,
    block: string,
    floor: string,
    apartment: number,
    mentions: string,
}