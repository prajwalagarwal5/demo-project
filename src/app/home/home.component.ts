import { Component, OnInit } from '@angular/core';
import data from '../home/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  useDefault: boolean = true;
  pricing = data;
  details: any;

  ngOnInit() {
    this.details = this.pricing.annual;
  }

  toggle(event) {
    if (event.checked) {
      this.details = this.pricing.annual;
    } else {
      this.details = this.pricing.monthly;
    }
    this.useDefault = event.checked;
    console.log(this.details);

  }

}
