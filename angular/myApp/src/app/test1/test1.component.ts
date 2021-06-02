import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  public idProperty = "firstname"
  public displayImage = "../assets/images/phon.jpeg"
  public altImage = "phone"
  public imageWidth = 100
  public greeting = ""

  constructor() { }

  ngOnInit(): void {
  }

  greetings(event){
    console.log(event)
    this.greeting = event.type
  }

  changeWidth(){
    this.imageWidth = this.imageWidth + 50
  }



}
