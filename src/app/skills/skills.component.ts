import { Component, OnInit, ViewChild } from "@angular/core";
import { NgxFlickingComponent, Plugin } from "@egjs/ngx-flicking";
import { Sync } from "@egjs/flicking-plugins";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  softwareSkills: string[] = [];
  generalSkills: string[] = [];
  hardwareSkills: string[] = [];
  @ViewChild("flicking0", { static: true }) flicking0!: NgxFlickingComponent;
  @ViewChild("flicking1", { static: true }) flicking1!: NgxFlickingComponent;
  @ViewChild("flicking2", { static: true }) flicking2!: NgxFlickingComponent;

  public plugins: Plugin[] = [];
  constructor() { }

  ngOnInit(): void {
    this.plugins = [new Sync({
      type: "camera",
      synchronizedFlickingOptions: [
        {
          flicking: this.flicking0,
          isClickable: false
        },
        {
          flicking: this.flicking1,
          isClickable: false
        },
        {
          flicking: this.flicking2,
          isClickable: false
        }
      ]
    })]
  }
}
