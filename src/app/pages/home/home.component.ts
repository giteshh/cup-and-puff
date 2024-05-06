import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
