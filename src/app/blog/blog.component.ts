import { Component, OnInit } from '@angular/core';

import { PorjserviceService } from '../porjservice.service';
import {RootBlog} from '../blog-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList=[];
  constructor(private blg:PorjserviceService) { }

  ngOnInit() {
  	this.blg.getBlogdata().subscribe(
        data =>{
          this.blogList = data.entry;
          console.log(this.blogList);
        }
      );

  }

}
