import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Pagination } from '@egjs/flicking-plugins';
import { Plugin } from "@egjs/ngx-flicking";

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  workHistory: any[] = []; // Define the structure that matches your data
  public plugins: Plugin[] = [new Pagination({ type: 'bullet' })];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.workHistory = this.dataService.getWorkHistory();
  }

}
