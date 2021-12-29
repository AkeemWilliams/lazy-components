import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    MatButtonModule
  ]
})
export class SampleModule { }
