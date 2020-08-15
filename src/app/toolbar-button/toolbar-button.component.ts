import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.css']
})
export class ToolbarButtonComponent implements OnInit {
  @Input() text: string = ''
  count: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.count++
  }
}
