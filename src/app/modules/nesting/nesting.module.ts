import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestingRoutingModule } from './nesting-routing.module';
import { NestingComponent } from './nesting.component';


@NgModule({
  declarations: [NestingComponent],
  imports: [
    CommonModule,
    NestingRoutingModule
  ]
})
export class NestingModule { }
