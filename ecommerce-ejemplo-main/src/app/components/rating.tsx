import { Rating } from "../interfaces/product.interface";

export default function RatingComponent({rating}: {rating: Rating}) {
    const rate = rating.rate;
    let stars = '';
    console.log(rate);
    for (let i = 0; i < rate; i++) {
        stars += '⭐';
    }

    return (<span>{stars}</span>)

}