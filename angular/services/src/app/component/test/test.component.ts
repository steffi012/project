
import { Component, Input, Output, OnInit,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name:string;

  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.childEvent.emit("Hello i am child of Sindhu Mathew")
  }

}
