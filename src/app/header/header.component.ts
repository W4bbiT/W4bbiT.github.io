import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('wobbly', [
      state('inactive', style({ transform: 'scale(1)' })),
      state('active', style({ transform: 'scale(1.1)' })),
      transition('inactive => active', animate('800ms ease-out', keyframes([
        style({ transform: 'scale(1.1)', offset: 0.2 }),
        style({ transform: 'scale(0.9)', offset: 0.4 }),
        style({ transform: 'scale(1.1)', offset: 0.6 }),
        style({ transform: 'scale(0.9)', offset: 0.8 }),
        style({ transform: 'scale(1.1)', offset: 1.0 })
      ]))),
      transition('active => inactive', animate('800ms ease-out'))
    ]),
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition('in => out', animate('500ms ease-out')),
      transition('out => in', animate('500ms ease-in'))
    ])
  ]
})

export class HeaderComponent implements OnInit, AfterViewInit {
  isWobbly = false;
  isMenuOpened = false;

  activeSection: string = ''; 
  fullName: string = '';
  title: string = '';
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fullName = this.dataService.getFullName();
    this.title = this.dataService.getTitle();
  }

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  toggleWobbly() {
    this.isWobbly = !this.isWobbly;
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

  toggleSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sectionPositions: { [key: string]: number } = {};
  
    const sectionIds = ['home', 'about', 'education', 'projects', 'skills', 'experience', 'contact'];
  
    const offset = -300;  
  
    for (const sectionId of sectionIds) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionPositions[sectionId] = sectionElement.offsetTop + offset;
      }
    }
  
    const scrollPosition = window.scrollY;
  
    let activeSection = 'home';
  
    for (const section in sectionPositions) {
      if (scrollPosition >= sectionPositions[section]) {
        activeSection = section;
      }
    }
    this.activeSection = activeSection;
    console.log('Active section:', this.activeSection);
  }
}
