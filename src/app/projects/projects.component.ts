import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AutoPlay } from '@egjs/flicking-plugins';
import { Plugin } from "@egjs/ngx-flicking";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[] = [];
  public plugins: Plugin[] = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false })];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.projects = this.data.getProjects();
  }

}
