export class Card {
    front: string;
    back: string;
    attempts: number;
    failures: number;
    lastReview: Date;
    nextReview: Date;
    timeAdj: number; // used for scheduling next review
}
