import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserGuardService } from './core/guards/user-guard.service';
import { LoginComponent } from './templates/login/login.component';
import { PokedexComponent } from './templates/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserGuardService],
    component: AppComponent,
    children: [{ path: '', component: PokedexComponent }],
  },
  {
    path: 'login',
    component: AppComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
