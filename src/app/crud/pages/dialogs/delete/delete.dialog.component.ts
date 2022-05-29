import {Component, Inject, OnInit} from '@angular/core';
import {Person} from "../../../models/person";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CrudService} from "../../../services/crud.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.dialog.component.html',
  styleUrls: ['./delete.dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Person,
              public personService: CrudService) { }

  ngOnInit(): void {
  }
  //Cancel
  onNoClick(): void {
    this.dialogRef.close();
  }
  //delete
  deletePerson(person: Person) {
    this.personService.deletePerson(person).subscribe(() => {
      console.log('person deleted');
    })
  }
}
