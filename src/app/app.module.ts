import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopListComponent } from './laptop/laptop-list/laptop-list.component';
import { LaptopItemComponent } from './laptop/laptop-list/laptop-item/laptop-item.component';
import { LaptopDetailComponent } from './laptop/laptop-detail/laptop-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { EditComponent } from './laptop/laptop-detail/edit/edit.component';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaptopComponent,
    CustomersComponent,
    LaptopListComponent,
    LaptopItemComponent,
    LaptopDetailComponent,
    DropdownDirective,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
