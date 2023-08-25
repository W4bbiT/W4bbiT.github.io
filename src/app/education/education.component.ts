import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: string = '';
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.education = this.data.getEducation();
  }

}
