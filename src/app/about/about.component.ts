import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit{
  summary: string = '';
  title:string='';
  location: string = '';
  phone: string = '';
  email: string = '';
  name: string ='';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.name = this.dataService.getFullName();
    this.summary = this.dataService.getSummary();
    this.location = this.dataService.getLocation();
    this.phone = this.dataService.getPhone();
    this.email = this.dataService.getEmail();
    this.title = this.dataService.getTitle();
  }
}
