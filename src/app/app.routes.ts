import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CigerattesComponent} from "./pages/cigerattes/cigerattes.component";
import {LoginComponent} from "./pages/login/login.component";
import {CigeratteCategoryComponent} from "./pages/cigeratte-category/cigeratte-category.component";
import {GoldFlakeComponent} from "./pages/gold-flake/gold-flake.component";
import {MarlboroComponent} from "./pages/marlboro/marlboro.component";
import {FourSquareComponent} from "./pages/four-square/four-square.component";
import {WillsClassicComponent} from "./pages/wills-classic/wills-classic.component";
import {OthersComponent} from "./pages/others/others.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cigerattes', component: CigerattesComponent},
  {path: 'cigerattes-category', component: CigeratteCategoryComponent},
  {path: 'gold-flake', component: GoldFlakeComponent},
  {path: 'marlboro', component: MarlboroComponent},
  {path: 'wills-classic', component: WillsClassicComponent},
  {path: 'others', component: OthersComponent},
];
