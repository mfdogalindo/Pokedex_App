import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserGuardService } from './core/guards/user-guard.service';
import { PokedexComponent } from './templates/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserGuardService],
    component: AppComponent,
    children: [{ path: '', component: PokedexComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
