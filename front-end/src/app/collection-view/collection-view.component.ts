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
  completed: boolean = false;

  constructor() {
    // mock data
    this.reviewedCount = 0;
    let card: Card = new Card();
    card.front = "In DML (Data Manipulation Language), which command is used to add new data to a table?";
    card.back = "INSERT";
    this.collection.push(card);
    card = new Card();
    card.front = "What is the default syntax in Angular for interpolation?";
    card.back = "Double curly braces around the expression. {{expression}}";
    this.collection.push(card);
    card = new Card();
    card.front = "In Java, checked exceptions are members of which class and its subclasses?";
    card.back = "RuntimeException";
    this.collection.push(card);
   }

  ngOnInit(): void {
  }

  nextCard(evaluation: number): void {
    this.reviewedCount++;
    this.testEvaluation = evaluation;
    if (this.reviewedCount == this.collection.length) this.completed = true;
  }

}
