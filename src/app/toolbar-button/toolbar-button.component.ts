import { Component, OnInit, Input } from '@angular/core';
import { ToolbarEventsService } from '../toolbar-events.service';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.css']
})
export class ToolbarButtonComponent implements OnInit {
  @Input() text: string = ''
  count: number = 0

  constructor(private toolbarEventsService: ToolbarEventsService) { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.count++
  }
}
