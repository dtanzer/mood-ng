import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  headline: string = 'headline'
  buttonText: string = 'button text'
  additionalText: string = 'additional text'

  constructor() { }

  ngOnInit(): void {
  }

  onInnerClickedOutput() {
    this.headline = 'changed!'
    this.additionalText = 'inner clicked'
  }
}
