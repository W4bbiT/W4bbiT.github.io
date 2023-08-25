import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Plugin } from "@egjs/ngx-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  softwareSkills: string[] = [];
  generalSkills: string[] = [];
  hardwareSkills: string[] = [];
  plugins: Plugin[] = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.softwareSkills = this.dataService.getSoftwareSkills();
    this.generalSkills = this.dataService.getGeneralSkills();
    this.hardwareSkills = this.dataService.getHardwareSkills();
  }
}
