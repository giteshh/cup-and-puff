import { Component } from '@angular/core';
import {cigeratteCategories} from "../../../assets/cigeratte-categories";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cigerattes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cigerattes.component.html',
  styleUrl: './cigerattes.component.css'
})
export class CigerattesComponent {

  constructor() {
  }

  cigeratteCategories = cigeratteCategories
}
