import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    // nabvar background changes on scroll
    let navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > navbar.clientHeight) {
      navbar.classList.add('navbar-inverse');
    }
    else {
      navbar.classList.remove('navbar-inverse');
    }

    // logo size changes on scroll
    var logo = document.getElementById("logo") as HTMLElement;
    let nav = document.querySelector(".navbar-nav") as HTMLElement;
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      //on scroll
      logo.style.width = '150px';
      nav.style.marginLeft = '56%';
    } else {
      logo.style.width = '190px';
      nav.style.marginLeft = '55%';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
