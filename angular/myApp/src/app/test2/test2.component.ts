import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public name = "Expertz Lab"

  users = [
    {id:10, name:"Steffi"},
    {id:20, name:"Swathi"},
    {id:30, name:"Gouri"}

  ]

  person = {
    "firstName":"Steffi",
    "secondName":"Nobel"
  }

  public color = "black"

  constructor() { }

  ngOnInit(): void {
  }

}
