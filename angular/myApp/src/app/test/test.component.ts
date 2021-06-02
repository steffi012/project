import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public clsname = "one"
  public clsname2 = "two"
  public hasError = false
  public highlight : "orange"

  public titleStyles ={
    color:"blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
