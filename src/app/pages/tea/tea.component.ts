import {Component} from '@angular/core';
import {tea} from "../../../assets/products";
import {NavbarComponent} from "../navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-tea',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './tea.component.html',
  styleUrl: './tea.component.css'
})
export class TeaComponent {
  tea = tea;
}
