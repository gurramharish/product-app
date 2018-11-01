import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../shared/models/address';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @Input is a property binding
  // <app-footer year="2018" > --fixed value
  // <app-footer  [year]="2018 + 2" /> -- expression, pass 2020 to year

  // Output is always emitted as event from child

  // output, child to parent, always through events only
  // Output is an event binding, custom event(contactEvent)

  highlightColor = '#a00303';

  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();

  @Input()
  year: number;

  @Input()
  company: string;

  @Input()
  address: Address;

  constructor() { }

  ngOnInit() {
  }

  contactClicked() {
    // raise event
    // emitted values can be accessed as $event
    this.contactEvent.emit(this.address);
  }

}
