import { Component, Input, OnInit } from '@angular/core';
import { Laptop } from 'src/app/models/laptop.model';
import { LaptopService } from '../../laptop.service';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class LaptopItemComponent implements OnInit {
  @Input() laptop: Laptop;
  @Input() id: any;

  constructor(private laptopSV: LaptopService) { }

  ngOnInit(): void {
  }

}
