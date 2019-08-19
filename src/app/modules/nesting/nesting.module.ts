import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestingRoutingModule } from './nesting-routing.module';
import { NestingComponent } from './nesting.component';
import { NestedComponent } from './nested/nested.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [NestingComponent, NestedComponent],
    imports: [
        CommonModule,
        NestingRoutingModule,
        FormsModule
    ]
})
export class NestingModule { }
