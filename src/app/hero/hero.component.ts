import { Component, OnInit, AfterViewInit, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('HeroAnimations', [
      state('Left', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      state('Right', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      state('SlideFromLeft', style({
        transform: 'translateX(-100%) translateZ(-50px)',
        opacity: 0,
      })),
      state('SlideFromRight', style({
        transform: 'translateX(100%) translateZ(-50px)',
        opacity: 0,
      })),
      transition('* => Left', [
        animate('800ms 300ms ease-in-out', keyframes([
          style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
          style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.7 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1.0 })
        ]))
      ]),
      transition('* => Right', [
        animate('800ms 300ms ease-in-out', keyframes([
          style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
          style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.7 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1.0 })
        ]))
      ])
    ]),
  ]
})
export class HeroComponent implements OnInit,AfterViewInit {
  @ViewChild("textElement", { static: true }) textElement!: ElementRef;
  @ViewChild("blinkElement", { static: true }) blinkElement!: ElementRef;
  @Input() wordArray: string[] = [
    " Angular",
    " Node.js",
    " Java",
    " MongoDB",
    " MySQL",
    " SnowFlake",
    " Azure",
    " Git",
  ];
  textColor = "black";
  fontSize = "30px";
  blinkWidth = "2px";
  typingSpeedMilliseconds = 300;
  deleteSpeedMilliseconds = 100;
  private i = 0;

  AboutState = 'SlideFromLeft';
  EducationState = 'SlideFromRight';
  ProjectsState = 'SlideFromLeft';
  SkillsState = 'SlideFromRight';
  ExperienceState = 'SlideFromLeft';
  ContactState = 'SlideFromRight';

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

  isIntersecting: boolean = false;
  isVisible: boolean = false;
  aboutIsCutting: boolean = false;
  educationIsCutting: boolean = false;
  projectsIsCutting: boolean = false;
  skillsIsCutting: boolean = false;
  experienceIsCutting: boolean = false;
  contactIsCutting: boolean = false;


  constructor(private dataService: DataService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.fullName = this.dataService.getFullName();
    this.title = this.dataService.getTitle();
    this.summary = this.dataService.getSummary();
    this.location = this.dataService.getLocation();
    this.phone = this.dataService.getPhone();
    this.email = this.dataService.getEmail();
  }
  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }
  AboutCutting(event: boolean) {
    this.aboutIsCutting = event;
    if (this.aboutIsCutting) {
      this.AboutState = 'Left';
    }
  }
  EducationCutting(event: boolean) {
    this.educationIsCutting = event;
    if (this.educationIsCutting) {
      this.EducationState = 'Right';
    }
  }
  ProjectsCutting(event: boolean) {
    this.projectsIsCutting = event;
    if (this.projectsIsCutting) {
      this.ProjectsState = 'Left';
    }
  }
  SkillsCutting(event: boolean) {
    this.skillsIsCutting = event;
    if (this.skillsIsCutting) {
      this.SkillsState = 'Right';
    }
  }
  ExperienceCutting(event: boolean) {
    this.experienceIsCutting = event;
    if (this.experienceIsCutting) {
      this.ExperienceState = 'Left';
    }
  }
  ContactCutting(event: boolean) {
    this.contactIsCutting = event;
    if (this.contactIsCutting) {
      this.ContactState = 'Right';
    } 
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "color",
      this.textColor
    );
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
      "border-right-color",
      this.textColor
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
}
