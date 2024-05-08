import {Component} from '@angular/core';
import {marlboro} from "../../../assets/products";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-marlboro',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './marlboro.component.html',
  styleUrl: './marlboro.component.css'
})
export class MarlboroComponent {
  marlboro = marlboro;
}
