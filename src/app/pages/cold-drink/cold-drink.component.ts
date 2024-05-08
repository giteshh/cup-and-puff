import {Component} from '@angular/core';
import {colddrinks} from "../../../assets/products";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-cold-drink',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './cold-drink.component.html',
  styleUrl: './cold-drink.component.css'
})
export class ColdDrinkComponent {
  colddrink = colddrinks;
}
