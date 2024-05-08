import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {cigeratteCategories} from "../../../assets/cigeratte-categories";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-cigeratte-category',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './cigeratte-category.component.html',
  styleUrl: './cigeratte-category.component.css'
})
export class CigeratteCategoryComponent {
  cigeratteCategories = cigeratteCategories
}
