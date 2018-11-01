import { Component } from '@angular/core';
import { Address } from './shared/models/address';

@Component({
  selector : 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.css'
  ]
})
export class AppComponent {

  // Models, binded to view
  appTitle = 'Product App';

  copyrightYear = 2018;

  address: Address = {
    city: 'Chennai',
    state: 'TN',
    pincode: 96
  };

  contactClickedTriggered(addr: Address) {
    console.log('Contact event triggered in app component : ', addr);
    alert(JSON.stringify(addr));
  }
}
