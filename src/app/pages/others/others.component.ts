import {Component} from '@angular/core';
import {others} from "../../../assets/products";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent {
  others = others;
}
