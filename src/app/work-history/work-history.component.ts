import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  workHistory: any[] = []; // Define the structure that matches your data

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.workHistory = this.dataService.getWorkHistory();
  }

}
