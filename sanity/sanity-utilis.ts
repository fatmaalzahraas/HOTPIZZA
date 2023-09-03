import { Pizza } from '@/types/pizza';
import {createClient, groq} from 'next-sanity';
import clientConfig from './config/client-config';
import { Order,OrderUserInfo } from '@/types/order';
import {uuid} from '@sanity/uuid'
//const delay = () => new Promise<void>((res) => setTimeout(() => res(), 1500))
export async function getAllPizza() : Promise<Pizza[]> {
    //const client = createClient(clientConfig);
    //await delay();
    return createClient(clientConfig).fetch(
        groq`*[_type == "pizza"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            smallPrice,
            mediumPrice,
            largePrice,
            description,
            toppings[]{
                "image": image.asset->url,
                name,
                price
            }
        }`
    )
}
export async function createOrder(
    formInfo: OrderUserInfo,
    total: number,
    ) {
        const orderId = uuid();
        try {
            const orderData = await createClient(clientConfig).create<Order>({
                _type: 'order',
               _id: orderId,
               _createdAt: new Date(),
                userInfo: {
                firstName: formInfo.firstName,
                lastName: formInfo.lastName,
                phone: formInfo.phone,
                anotherPhone: formInfo.anotherPhone,
                streetName: formInfo.streetName,
                streetNo: Number(formInfo.streetNo),
                block: formInfo.block,
                floor: formInfo.floor,
                apartment: Number(formInfo.apartment),
                mentions: formInfo.mentions,
                },
                total,
                status : 1
            })
            return orderData;
        } catch(err) {
            console.log(err)
        }
}
export async function getOrder(orderId: string) : Promise<Order>{
    //await delay();
    return createClient(clientConfig).fetch(
        groq`*[_type == "order" && _id == $orderId][0]{
            _id,
            _createdAt,
            userInfo{
            firstName,
            lastName,
            phone,
            anotherPhone,
            streetName,
            streetNo,
            block,
            floor,
            apartment,
            mentions,
            },
            total,
            status
        }`, {orderId}  
    )
}