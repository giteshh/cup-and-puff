import {Component} from '@angular/core';
import {classic} from "../../../assets/products";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-wills-classic',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './wills-classic.component.html',
  styleUrl: './wills-classic.component.css'
})
export class WillsClassicComponent {
  classic = classic;
}
