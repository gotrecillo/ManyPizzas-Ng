import { Component, OnInit } from '@angular/core';

@Component({
  selector    : 'piz-pizzaslist',
  templateUrl : './pizzas-list.component.html',
  styleUrls   : [ './pizzas-list.component.scss' ],
})
export class PizzaslistComponent implements OnInit {

  pizzas = [
    { title       : 'Tonny Peperoni',
      imgSrc      : 'http://i.imgur.com/7EDW2QQ.jpg',
      rating      : 3.3,
      description : 'Nice and spicy, pepperoni always is a safe bet',
    },
    { title  : 'Red And Green',
      imgSrc : 'http://i.imgur.com/8ZlRH6m.jpg',
      rating : 1.4,
      description : 'Directly form our garden to our kitchen',
    },
    { title  : 'Cheesehamstic',
      imgSrc : 'http://i.imgur.com/yDC53GE.jpg',
      rating : 4.9,
      description : 'A classic, ham and chese',
    },
    { title  : 'White Spring',
      imgSrc : 'http://i.imgur.com/KoUdtjV.jpg',
      rating : 4.9,
      description : 'Creamy and soft pizza.',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
