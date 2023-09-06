import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullName: string = '';
  title: string = '';
  isAboutOpened: boolean = false
  isEducationOpened: boolean = false
  isProjectsOpened: boolean = false
  isSkillsOpened: boolean = false
  isExperienceOpened: boolean = false
  isContactOpened: boolean = false

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fullName = this.dataService.getFullName();
    this.title = this.dataService.getTitle();
  }

  toggleAbout(): void {
    this.isAboutOpened = !this.isAboutOpened;
  }
  toggleEducation(): void {
    this.isEducationOpened = !this.isEducationOpened;
  }
  toggleProjects(): void {
    this.isProjectsOpened = !this.isProjectsOpened;
  }
  toggleSkills(): void {
    this.isSkillsOpened = !this.isSkillsOpened;
  }
  toggleExperience(): void {
    this.isExperienceOpened = !this.isExperienceOpened;
  }
  toggleContact(): void {
    this.isContactOpened = !this.isContactOpened;
  }


  clickedOutsideAbout(): void {
    this.isAboutOpened = false;
  }
  clickedOutsideEducation(): void {
    this.isEducationOpened = false;
  }
  clickedOutsideProjects(): void {
    this.isProjectsOpened = false;
  }
  clickedOutsideSkills(): void {
    this.isSkillsOpened = false;
  }
  clickedOutsideExperience(): void {
    this.isExperienceOpened = false;
  }
  clickedOutsideContact(): void {
    this.isContactOpened = false;
  }
}
