import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { ProjectsComponent } from './projects/projects.component';
import { NgxFlickingModule } from '@egjs/ngx-flicking';
import { NgxGridModule } from '@egjs/ngx-grid';
import { ObserveVisibilityDirective } from './directives/observe-visibility.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DropMenuComponent } from './drop-menu/drop-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    WorkHistoryComponent,
    ContactComponent,
    ProjectsComponent,
    ObserveVisibilityDirective,
    ClickOutsideDirective,
    DropMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxFlickingModule,
    NgxGridModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  exports: [ObserveVisibilityDirective]
})
export class AppModule { }
