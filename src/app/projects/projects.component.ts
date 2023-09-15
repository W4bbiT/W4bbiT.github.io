import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Pagination } from '@egjs/flicking-plugins';
import { Plugin } from "@egjs/ngx-flicking";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[] = [];
  public plugins: Plugin[] = [new Pagination({ type: 'bullet' })];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.projects = this.data.getProjects();
  }

}
