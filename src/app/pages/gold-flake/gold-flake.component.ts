import {Component} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {goldflake} from "../../../assets/products";

@Component({
  selector: 'app-gold-flake',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule],
  templateUrl: './gold-flake.component.html',
  styleUrl: './gold-flake.component.css'
})
export class GoldFlakeComponent {
  goldflake = goldflake
}
