import { Component, OnInit } from '@angular/core';
import {CompetencesService} from "../../services/competences.service";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  competences: any = [] //<- This array is exported

  constructor(private competencesService: CompetencesService) { }

  ngOnInit(): void {
    this.getAllCompetences();
  }

  getAllCompetences(){
    this.competencesService.getCompetences().subscribe((response:any)=>{
      this.competences = response;
    })
  }

}
