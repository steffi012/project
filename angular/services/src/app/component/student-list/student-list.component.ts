import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

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
