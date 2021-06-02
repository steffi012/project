import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  displayName = true

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.displayName = !this.displayName

  }

}
