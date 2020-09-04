import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() defaultGreeting: string = 'World';
  greeting: string='';

  constructor() { }

  ngOnInit(): void {
    this.greeting = this.defaultGreeting
  }

}