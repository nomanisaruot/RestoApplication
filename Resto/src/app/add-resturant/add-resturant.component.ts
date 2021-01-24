import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {
  alert: boolean = false;
  addResto = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl('')
  })

  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  createResto(){
    // console.log(this.addResto.value)
    this.resto.addResto(this.addResto.value).subscribe((result)=>{
      this.alert = true;
      this.addResto.reset({});
      console.log("Getting data From Service", result)
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
