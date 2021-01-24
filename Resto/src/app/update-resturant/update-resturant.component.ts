import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resturant',
  templateUrl: './update-resturant.component.html',
  styleUrls: ['./update-resturant.component.css']
})
export class UpdateResturantComponent implements OnInit {
  alert : Boolean = false;
  updateResto = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl('')
  })

  constructor(private resto:CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=> {
      console.log(result)
      // this.updateResto = new FormGroup({
      //   Name: new FormControl(result['Name']),
      //   Email: new FormControl(result['Email'])  /// dont worry

    })
  }

  closeAlert(){
    this.alert = false;
  }

}
