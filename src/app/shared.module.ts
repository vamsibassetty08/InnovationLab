import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './shared/star/star.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe

  ],
  exports: [
    StarComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
