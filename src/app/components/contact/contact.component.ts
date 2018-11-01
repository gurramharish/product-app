import { Component, OnInit } from '@angular/core';
import { Address } from '../../shared/models/address';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // address is undefined
  address: Address;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.address = {
        city: 'Chennai',
        state: 'TN',
        pincode: 96
      };
    }, 3000);
  }

}
