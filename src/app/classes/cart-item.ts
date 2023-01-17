import { CD } from "./cd";

export class CartItem {
    constructor(cd: CD) {
        this.cd = cd;
        this.price;
    }
    cd: CD;
    quantity: number = 1;

    get price(): number {
        return this.cd.price * this.quantity;
    }

}
