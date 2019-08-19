import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-nesting',
    templateUrl: './nesting.component.html',
})
export class NestingComponent implements OnInit {

    public someVariable: string;
    public twoWayBindingVariable: string;
    public nestedButtonClickedInfo: string;

    constructor() {
    }

    ngOnInit() {
    }

    onNestedButtonClick(buttonName: string) {
        this.nestedButtonClickedInfo = buttonName;
    }

}
