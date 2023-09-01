import { Component, OnInit } from "@angular/core";
import { Plugin } from "@egjs/ngx-flicking";
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public plugins: Plugin[] = [];
  softwareSkills: string[] = [];
  generalSkills: string[] = [];
  hardwareSkills: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    
  }
}
