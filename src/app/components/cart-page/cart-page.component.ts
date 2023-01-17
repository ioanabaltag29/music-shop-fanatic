import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'app/classes/cart';
import { CartItem } from 'app/classes/cart-item';
import { CD } from 'app/classes/cd';
import { CartService } from 'app/services/cart.service';
import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart: Cart;
  cartTotal: CartItem[] = [];
  cds: CD[] = [];
  id!: number;
  cd = {} as CD;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService, private storeService: StoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCDs();

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
  }


  removeFromCart(cd: CD) {
    this.cd = cd;
    this.totalPrice -= cd.quantity_price;
    this.totalQuantity -= cd.quantity;
    this.cd.in_cart = false;

    //updating cart elements
    this.cartService.updateCartItem(this.cd).subscribe(
      (data) => {
        console.log("Removed cd: " + this.cd);
      },
      (error) => console.log(error)
    )

    // updating cart page
    this.storeService.getInCartCDs().subscribe(
      (data) => {
        this.cds = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      })
    console.log("Total price " + this.totalPrice);
    console.log("Total quantity " + this.totalQuantity);
  }

  changeQuantity(cd: CD, quantityInString: string) {
    cd.quantity = parseInt(quantityInString);
    this.cd = cd;
    this.cd.quantity_price = this.cd.price * cd.quantity;
    this.cartService.updateCartItem(this.cd).subscribe(
      (data) => { console.log("Quantity changed to: " + this.cd.quantity) },
      (error) => console.log(error)
    )

    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.cds.forEach(cd => {
      this.totalPrice += cd.quantity_price;
      this.totalQuantity += cd.quantity;
    })
  }

  getCDs() {
    this.storeService.getInCartCDs().subscribe(
      (data) => {
        this.cds = data;
        console.log(data)
        this.cds.forEach(cd => {
          this.totalPrice += cd.quantity_price;
          this.totalQuantity += cd.quantity;
        })
      },
      (error) => {
        console.log(error);
      })
  }

  buyCDs() {
    this.cds.forEach(cd => {
      cd.in_cart = false;
      //this.cds.values() = cd.in_cart;

      this.cartService.updateCartItem(cd).subscribe(
        (data) => {
        },
        (error) => console.log(error)
      )
    })

    this.getCDs();
    this.totalPrice = 0;
    this.totalQuantity = 0;
  }
}