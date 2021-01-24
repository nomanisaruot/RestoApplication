import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-resturant',
  templateUrl: './list-resturant.component.html',
  styleUrls: ['./list-resturant.component.css']
})
export class ListResturantComponent implements OnInit {
public collection: any;
  constructor(private CommonService:CommonService) { }

  ngOnInit(): void {

    this.CommonService.getRestoList().subscribe((result =>{
      this.collection = result;
      console.log(this.collection)
    }));
  }

}
