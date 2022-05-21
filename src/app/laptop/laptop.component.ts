import { Component, OnInit } from '@angular/core';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
  providers: [LaptopService]
})
export class LaptopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
