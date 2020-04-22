import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.css']
})
export class CollectionViewComponent implements OnInit {
  collection: Array<Card> = [];
  reviewedCount: number;
  testEvaluation: number;

  constructor() {
    // mock data
    this.reviewedCount = 0;
    let card: Card = new Card();
    card.front = "test card 1 front";
    card.back = "test card 1 back";
    this.collection.push(card);
    card = new Card();
    card.front = "test card 2 front";
    card.back = "test card 2 back";
    this.collection.push(card);
   }

  ngOnInit(): void {
  }

  nextCard(evaluation: number): void {
    this.reviewedCount++;
    this.testEvaluation = evaluation;
  }

}
