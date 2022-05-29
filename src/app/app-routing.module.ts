import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from "./competences/pages/competences/competences.component";
import { CrudComponent } from "./crud/pages/crud/crud.component";

const routes: Routes = [
  { path: "", redirectTo:"crud", pathMatch: "full" },
  { path: "competences", component: CompetencesComponent },
  { path: "crud", component: CrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
