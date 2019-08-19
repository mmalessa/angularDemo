import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NestingComponent} from "./nesting.component";


const routes: Routes = [
    {
        path: '',
        component: NestingComponent,
        data: {
            title: 'Nesting'
        },
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestingRoutingModule {}
