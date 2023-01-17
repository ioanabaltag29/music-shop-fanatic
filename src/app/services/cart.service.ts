import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'app/classes/cart';
import { CartItem } from 'app/classes/cart-item';
import { CD } from 'app/classes/cd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem: CartItem;
  apiUrl = 'http://localhost:3000';
  constructor(private cart: Cart, private http: HttpClient) { }

  getCart(): Cart {
    // var retrievedItem = localStorage.getItem('cartItem');
    // console.log('retrievedItem: ', JSON.parse(retrievedItem));
    return this.cart;
  }
  readAllCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl + "/cart")
  }

  changeQuantity(cdId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => {
      item.cd.id === cdId;
    },
      (error) => console.log(error))
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  addToCart(cd: CD): void {
    let cartItem = this.cart.items.find((item) => item.cd.id === cd.id);

    if (cartItem) {
      this.changeQuantity(cd.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(cd));
    // localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }

  postCartItem(cd: CD): Observable<CD> {
    return this.http.post<CD>(this.apiUrl + "/cart", JSON.stringify(cd));
  }

  removeFromCart(cdId: number): void {
    this.cart.items = this.cart.items.filter(item => item.cd.id != cdId)
  }

  updateCartItem(item: CD) {
    return this.http.put<CD>(this.apiUrl + "/store/" + item.id, item);
  }
}
