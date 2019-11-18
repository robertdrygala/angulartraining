import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { PlateBorderHiglightDirective } from '../directives/plate-border.directive';
import { DurationPipe } from '../pipes/duration.pipe';
import { OrderByPipe } from '../pipes/orderby.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [AppComponent, FooterComponent, HeaderComponent, CourseDetailsComponent, ListItemComponent];
const DIRECTIVES = [PlateBorderHiglightDirective];
const PIPES = [DurationPipe, OrderByPipe, FilterPipe];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [COMPONENTS, DIRECTIVES, PIPES],
})
export class SharedModule {}
