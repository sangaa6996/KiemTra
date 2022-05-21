import { LaptopService } from './../laptop.service';
import { Laptop } from './../../models/laptop.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {

  laptops: Laptop[];

  constructor(private laptopSv:LaptopService) { }

  ngOnInit(): void {
    this.laptops = this.laptopSv.getLaptops();
  }

}
