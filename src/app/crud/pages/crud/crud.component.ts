import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud.service";
import { MatTableDataSource } from "@angular/material/table";
import { Person } from "../../models/person";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { AddDialogComponent } from "../dialogs/add/add.dialog.component";
import {DeleteDialogComponent} from "../dialogs/delete/delete.dialog.component";
import {UpdateDialogComponent} from "../dialogs/update/update.dialog.component";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  persons: any = []
  displayedColumns: string[] = ['id', 'name', 'year', 'height', 'actions'];

  constructor(private personService: CrudService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllPerson();
  }
  //->Get
  getAllPerson() {
    this.personService.getPerson().subscribe((response:any)=>{
      this.persons = new MatTableDataSource(response)
    })
  }

  //->Post

  postPerson() {
    const dialogRef = this.dialog.open(AddDialogComponent,{
      data: { person : Person }
    })
    this.refresh(dialogRef)
  }
  //->Update
  updatePerson(person : Person) {
    const dialogRef = this.dialog.open(UpdateDialogComponent,{
      data: person
    })
    this.refresh(dialogRef)
  }
  //->Delete
  deletePerson(person : Person) {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      data: person
    })
    this.refresh(dialogRef)
  }
  //Filter
  doFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.persons.filter = value.trim().toLowerCase();
  }
  //refresh

  refresh(dialogRef: MatDialogRef<any>) {
    dialogRef.afterClosed().subscribe(result => {
      this.persons = [];
      this.getAllPerson();
    })
  }
}
