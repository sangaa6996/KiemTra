import { Router, ActivatedRoute, Params } from '@angular/router';
import { LaptopService } from './../../laptop.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  editMode = false;
  laptopForm: FormGroup;

  constructor(private laptopSv: LaptopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  initForm(){
    let laptopName = '';
    let laptopId = '';
    let laptopPrice = '';
    // let recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const laptop = this.laptopSv.getLaptop(this.id);
      laptopName = laptop.name;
      laptopId = laptop.id;
      laptopPrice = laptop.price;
      // if (recipe['ingredients']) {
      //   for (let ingredient of recipe.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         'name': new FormControl(ingredient.name, Validators.required),
      //         'amount': new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     );
      //   }
      // }
    }

    this.laptopForm = new FormGroup({
      'name': new FormControl(laptopName, Validators.required),
      'id': new FormControl(laptopId, Validators.required),
      'price': new FormControl(laptopPrice, Validators.required),
    });
  }

  onSubmit(){
    if (this.editMode) {
      this.laptopSv.updateLaptop(this.id, this.laptopForm.value);
    } else {
      this.laptopSv.addLaptop(this.laptopForm.value);
    }
  }
}
