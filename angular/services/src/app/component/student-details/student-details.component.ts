import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students = [
    {id:10, name:"Steffi", age:45},
    {id:20, name:"Tanu", age:35},
    {id:30, name:"Saniya", age:25},
    {id:40, name:"Gouri", age:20},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
