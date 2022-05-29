import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Angular-cli
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
//Angular-material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
//Components
import { CrudComponent } from './crud/pages/crud/crud.component';
import { CompetencesComponent } from './competences/pages/competences/competences.component';
import { AddDialogComponent } from './crud/pages/dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from "./crud/pages/dialogs/delete/delete.dialog.component";
import { UpdateDialogComponent } from "./crud/pages/dialogs/update/update.dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    CompetencesComponent,
    CrudComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
