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
    ])
  ]
})

export class HeaderComponent implements OnInit, AfterViewInit {
  isWobbly = false;

  toggleWobbly() {
    this.isWobbly = !this.isWobbly;
  }
  activeSection: string = ''; // Initialize with a default value or leave empty
  fullName: string = '';
  title: string = '';
  isAboutOpened: boolean = false
  isEducationOpened: boolean = false
  isProjectsOpened: boolean = false
  isSkillsOpened: boolean = false
  isExperienceOpened: boolean = false
  isContactOpened: boolean = false

  constructor(private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.fullName = this.dataService.getFullName();
    this.title = this.dataService.getTitle();
  }

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  toggleHome(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  toggleAbout(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  toggleEducation(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  toggleProjects(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  toggleSkills(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  toggleExperience(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  toggleContact(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Update the active section based on scroll position
    this.updateActiveSection();
  }
  updateActiveSection() {
    // Define an object to hold section IDs and their positions
    const sectionPositions: { [key: string]: number } = {};
  
    // Define the section IDs
    const sectionIds = ['home', 'about', 'education', 'projects', 'skills', 'experience', 'contact'];
  
    // Define the offset to adjust the scroll position
    const offset = -300;  // Adjust this value based on your layout
  
    // Get the positions of each section with the offset
    for (const sectionId of sectionIds) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionPositions[sectionId] = sectionElement.offsetTop + offset;
      }
    }
  
    // Get the scroll position
    const scrollPosition = window.scrollY;
  
    // Initialize a variable to keep track of the active section
    let activeSection = 'home';
  
    // Determine the active section based on scroll position
    for (const section in sectionPositions) {
      if (scrollPosition >= sectionPositions[section]) {
        activeSection = section;
      }
    }
    // Update this.activeSection accordingly
    this.activeSection = activeSection;
    console.log('Active section:', this.activeSection);
  }
}