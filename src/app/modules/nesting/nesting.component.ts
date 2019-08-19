import {Component} from '@angular/core';

@Component({
    selector: 'app-nesting',
    templateUrl: './nesting.component.html',
})
export class NestingComponent {

    public firstVariable: string;
    public secondVariable: string;
    public nestedButtonClickedInfo: string;

    onNestedButtonClick(buttonName: string) {
        this.nestedButtonClickedInfo = buttonName;
    }
}
