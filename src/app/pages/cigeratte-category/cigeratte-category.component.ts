import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {cigeratteCategories} from "../../../assets/cigeratte-categories";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-cigeratte-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cigeratte-category.component.html',
  styleUrl: './cigeratte-category.component.css'
})
export class CigeratteCategoryComponent {
  cigeratteCategories = cigeratteCategories
}
