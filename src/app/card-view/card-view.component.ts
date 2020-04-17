import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() card: Card; 
  @Output() evaluated = new EventEmitter<number>();
  revealed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  rating(selection: number){
    this.evaluated.next(selection);
    this.revealed = false;
  }

  reveal(){
    if (!this.revealed) this.revealed = true;
  }

}
