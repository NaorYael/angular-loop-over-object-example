import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello</h1>
    <ul *ngFor="let i of newDetectionObjectKeys">
      <li (click)="onDateSelect(i)">{{i}}</li>
    </ul>
  `,
})
export class App implements OnInit {
  newDetectionObject = {};
  newDetectionObjectKeys!: string[];
  ngOnInit(): void {
    const arr = [
      { date: '2023-03-23 15:27:44' },
      { date: '2023-03-23 15:28:44' },
      { date: '2022-01-24 10:00:10' },
    ];
    this.newDetectionObject = {};

    for (const detection of arr) {
      const date = detection.date.split(' ')[0];

      if (!this.newDetectionObject[date]) {
        this.newDetectionObject[date] = [];
      }

      this.newDetectionObject[date].push(detection);
    }

    console.log(this.newDetectionObject);

    this.newDetectionObjectKeys = Object.keys(this.newDetectionObject);
  }

  onDateSelect(date: string) {
    console.log(this.newDetectionObject[date]);
  }
}

bootstrapApplication(App);
