import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DbzComponent } from './dbz/dbz.component';
import { DigimonComponent } from './digimon/digimon.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path: "", redirectTo: '/main', pathMatch: 'full'},
  {path: "main", component: HomeComponent},
  {path: "pokemon", component: PokemonComponent},
  {path: "dbz", component: DbzComponent},
  {path: "digimon", component: DigimonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
