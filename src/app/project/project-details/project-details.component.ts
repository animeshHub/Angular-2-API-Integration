import { Component, OnInit, Input } from '@angular/core';

import { PorjserviceService } from '../../porjservice.service';
import {RootObject} from '../../proj-model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
	dtlss:any[];

  constructor(private proj: PorjserviceService) {}

  ngOnInit() {
  	this.dtlss = this.proj.sendDatadetails()
    //this.dtlss = this.listproj.clickitem();
  	console.log(this.dtlss);
  	
  }

}
