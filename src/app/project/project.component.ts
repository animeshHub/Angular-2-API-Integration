import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

import { PorjserviceService } from '../porjservice.service';
import {RootObject} from '../proj-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
   projdata:RootObject;	
   Location:any[];
   racesAry: any[];
   alresultAray:any[];
   public selectedHero:any;
   rslt:any[];


  

  constructor(private router: Router, private proj: PorjserviceService) {}

 clickitem(rslt){
       this.proj.detailsAnimesh = rslt;
       this.router.navigate(['projects', rslt.Driver.driverId]);
    }

  ngOnInit() {

  	this.proj.getData().subscribe(
  		data => {
  			this.projdata = data;
  			this.racesAry = data.MRData.RaceTable.Races;
        this.alresultAray = data.MRData.RaceTable.Races[0].Results;
  			}
  		);
  }

}
