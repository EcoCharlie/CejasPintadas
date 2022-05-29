import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../../models/person";
import {CrudService} from "../../../services/crud.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.dialog.component.html',
  styleUrls: ['./update.dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Person,
              public personService: CrudService) { }

  ngOnInit(): void {
  }
  //close
  onNoClick(): void {
    this.dialogRef.close();
  }
  //update
  updatePerson(person: Person) {
    this.personService.updatePerson(person).subscribe(()=>{
      console.log('Delete person');
    });
  }
}
