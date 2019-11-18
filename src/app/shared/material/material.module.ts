import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PlateBorderHiglightDirective } from 'src/app/directives/plate-border.directive';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

const COMPONENTS = [AppComponent];
const DIRECTIVES = [PlateBorderHiglightDirective];
const PIPES = [FilterPipe];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  imports: [],
  exports: [COMPONENTS, DIRECTIVES, PIPES],
})
export class MaterialModule {}
