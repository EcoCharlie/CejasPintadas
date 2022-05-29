import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../../models/person";
import {FormControl, Validator, Validators} from "@angular/forms";
import {CrudService} from "../../../services/crud.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.dialog.component.html',
  styleUrls: ['./add.dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Person,
              public personService: CrudService) { }

  ngOnInit(): void {
  }
  //Cancel
  onNoClick(): void {
    this.dialogRef.close();
  }
  //create
  createPerson(person: Person) {
    this.personService.postPerson(person).subscribe(() => {
      console.log('person added');
    })
  }
}
