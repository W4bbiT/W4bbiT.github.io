import { Component, OnInit } from "@angular/core";
import { Plugin } from "@egjs/ngx-flicking";
import { DataService } from '../data.service';
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
  softwareSkillsPlugins: Plugin[] = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];
  generalSkillsPlugins: Plugin[] = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false })];
  hardwareSkillsPlugins: Plugin[] = [new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false })];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    
  }
}
