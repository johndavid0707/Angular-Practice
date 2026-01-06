import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-component',
  imports: [],
  templateUrl: './life-component.html',
  styleUrl: './life-component.css',
})
export class LifeComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log('Component Created');
  }

  ngOnDestroy() {
    console.log('Component Destroyed');
  }
}
