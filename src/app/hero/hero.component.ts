import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('myAnimation', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('500ms ease-in-out'))
    ])
  ]
})
export class HeroComponent implements OnInit {
  animationState = 'initial';

  isVisible = true;
  isIntersecting = true;
  isCutting = true;
  fullName: string = '';
  title: string = '';
  summary: string = '';
  location: string = '';
  phone: string = '';
  email: string = '';
  frame = [[1, 1, 2, 2], [1, 1, 2, 2], [4, 4, 4, 5]];
  rectSize = 400;
  useFrameFill = false;
  gap = 2;
  align = 'justify' as const;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fullName = this.dataService.getFullName();
    this.title = this.dataService.getTitle();
    this.summary = this.dataService.getSummary();
    this.location = this.dataService.getLocation();
    this.phone = this.dataService.getPhone();
    this.email = this.dataService.getEmail();
  }

  isCuttingChange(event: boolean) {
    this.isCutting = event;
  }
  onVisibilityChange(isVisible: boolean) {
    if (isVisible) {
      this.playAnimation();
    }
  }

  playAnimation() {
    this.animationState = 'final';
  }
}
