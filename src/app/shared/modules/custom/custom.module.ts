import { NgModule } from '@angular/core';

// Custom Directives
import { TrimOnBlurDirective } from '../../directives/ng-trim.directive';
import { InputTrimModule } from 'ng2-trim-directive';

@NgModule({
  declarations: [
    TrimOnBlurDirective
  ],
  imports: [
    InputTrimModule
  ],
  exports: [
    TrimOnBlurDirective,
    InputTrimModule
  ]
})
export class CustomModule { }
