import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  submitButtonText = "Submit Button Text!"
  @Input() headline: string = '';

  @Input() buttonText: string = '';
  @Output() buttonTextChange = new EventEmitter<string>();

  @Output() onButtonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.onButtonClicked.emit();
    this.buttonTextChange.emit('text change: clicked');
  }
}
