import { Component, OnInit, AfterViewInit, ElementRef, Input, Renderer2, ViewChild, OnDestroy, EventEmitter, Output, HostListener } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { DataService } from '../data.service';
import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('HeroAnimations', [
      state('InView', style({
        transform: 'translateY(0)',
        opacity: 1,
        scale: 1,
      })),
      state('OutOfView', style({
        transform: 'translateY(20px)',
        opacity: 0,
        scale: 0.8,
      })),
      transition('OutOfView => InView', [
        animate('500ms ease-in-out', keyframes([
          style({ transform: 'translateY(20px)', opacity: 0, offset: 0 , scale: 0.8}),
          style({ transform: 'translateY(0)', opacity: 1, offset: 1, scale: 1})
        ]))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild("textElement", { static: true }) textElement!: ElementRef;
  @ViewChild("blinkElement", { static: true }) blinkElement!: ElementRef;
  @Input() wordArray: string[] = [
    " Angular",
    " Node.js",
    " Java",
    " MongoDB",
    " MySQL",
    " SpringBoot",
    " Azure",
    " AWS",
    " PostgreSQL"
  ];
  fontSize = "40px";
  blinkWidth = "2px";
  typingSpeedMilliseconds = 350;
  deleteSpeedMilliseconds = 100;
  private i = 0;

  fullName: string = '';
  title: string = '';
  summary: string = '';
  location: string = '';
  phone: string = '';
  email: string = '';

  aboutIsCutting: boolean = false;
  educationIsCutting: boolean = false;
  projectsIsCutting: boolean = false;
  skillsIsCutting: boolean = false;
  experienceIsCutting: boolean = false;
  contactIsCutting: boolean = false;
  aboutState: string = "OutOfView";
  eduState: string = "OutOfView";
  projectState: string = "OutOfView";
  skillState: string = "OutOfView";
  expState: string = "OutOfView";
  contactState: string = "OutOfView";

  constructor(private dataService: DataService,
    private renderer: Renderer2,
    private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.fullName = this.dataService.getFullName();
    this.title = this.dataService.getTitle();
    this.summary = this.dataService.getSummary();
    this.location = this.dataService.getLocation();
    this.email = this.dataService.getEmail();
  }

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
    this.observeSections();
  }

  private observeSections(): void {
    const options = {
      root: null, // Observe relative to viewport
      threshold: 0.5 // Trigger when 50% of section is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          switch (sectionId) {
            case 'about': this.aboutState = 'InView'; break;
            case 'education': this.eduState = 'InView'; break;
            case 'projects': this.projectState = 'InView'; break;
            case 'skills': this.skillState = 'InView'; break;
            case 'experience': this.expState = 'InView'; break;
            case 'contact': this.contactState = 'InView'; break;
          }
        }
      });
    }, options);
  
    // Observe all sections
    const sections = document.querySelectorAll('#about, #education, #projects, #skills, #experience, #contact');
    sections.forEach(section => observer.observe(section));
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "font-size",
      this.fontSize
    );
    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-width",
      this.blinkWidth
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "font-size",
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        this.i = this.wordArray.length > this.i + 1 ? this.i + 1 : 0;
        this.typingEffect();
        return;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();
  }

  toAbout() {
    this.scroller.scrollToAnchor("about");
  }
  toEducation() {
    this.scroller.scrollToAnchor("education");
  }
  toProjects() {
    this.scroller.scrollToAnchor("projects");
  }
  toSkills() {
    this.scroller.scrollToAnchor("skills");
  }
  toExperience() {
    this.scroller.scrollToAnchor("experience");
  }
  toContact() {
    this.scroller.scrollToAnchor("contact");

  }
}
