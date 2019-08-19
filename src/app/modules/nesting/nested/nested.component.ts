import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-nested',
    templateUrl: 'nested.component.html',
    styles: []
})
export class NestedComponent implements OnInit {

    @Input() someNestedVariable;
    @Input() twoWayBindingNestedVariable;
    @Output() twoWayBindingNestedVariableChange = new EventEmitter<string>();
    @Output() buttonClicked = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    onButtonClick(buttonName: string) {
        this.buttonClicked.emit(buttonName);
    }

    onTwoWayBindingNestedVariableChange() {
        this.twoWayBindingNestedVariableChange.emit(this.twoWayBindingNestedVariable);
    }
}
