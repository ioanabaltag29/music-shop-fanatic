import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'app/classes/cart';
import { CartItem } from 'app/classes/cart-item';
import { CD } from 'app/classes/cd';
import { CartService } from 'app/services/cart.service';
import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'app-cd-details',
  templateUrl: './cd-details.component.html',
  styleUrls: ['./cd-details.component.css']
})
export class CdDetailsComponent implements OnInit {
  cdData = {} as CD;
  id!: number;
  stars: number;
  albumLength: number;
  cdUpdate: CD;
  cart: Cart;
  cartTotal: CartItem[] = [];

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router, private cartService: CartService) { }

  showCDDetails(id: number) {
    this.id = this.route.snapshot.params["cdId"];
    return this.storeService.getCDById(this.id).subscribe(
      (data) => {
        this.cdData = data;
        this.stars = data.stars;
        console.log("Rating", this.cdData.stars)
        this.albumLength = data.image_album.length;
        console.log("Working cd details");
        console.log(this.cdData);
      },
      (error) => {
        console.log(error);
      }
    )
  }


  changeFavorite() {
    this.cdData.favorite = !this.cdData.favorite;
    this.storeService.updateCD(this.cdData).subscribe(
      (data) => {
        // data.favorite = this.cdData.favorite;
        // this.cdUpdate = data;
        // console.log(this.cdUpdate);
      },
      (error) => console.log(error)
    )
  }

  deactivateFavorite() {

    this.cdData.favorite = false;
    this.storeService.updateCD(this.cdData).subscribe(
      (data) => {
        // data.favorite = this.cdData.favorite;
        // this.cdUpdate = data;
        // console.log(this.cdUpdate);
      },
      (error) => console.log(error)
    )
  }

  addToCart() {

    this.cdData.in_cart = true;
    this.cdData.quantity = 1;
    this.cdData.quantity_price = this.cdData.price;
    this.cartService.updateCartItem(this.cdData).subscribe((data) => {
      console.log(data)
    },
      (error) => console.log(error))
  }

  setCart() {
    this.cart = this.cartService.getCart();
    this.cartService.readAllCartItems().subscribe(
      (data) => this.cartTotal = data
    )
  }

  removeFromCart() {

    this.cdData.in_cart = false;
    this.cartService.updateCartItem(this.cdData).subscribe((data) => {
      console.log(data)
    },
      (error) => console.log(error))
  }


  ngOnInit(): void {
    this.showCDDetails(this.id);
  }

}
