import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Laptop } from 'src/app/models/laptop.model';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent implements OnInit {
  laptop: Laptop;
  id: any;
  constructor(private laptopSV: LaptopService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        console.log(params);
        this.laptop = this.laptopSV.getLaptop(this.id);
      }
    );
  }

  onDeleteLaptop(){

  }

}
