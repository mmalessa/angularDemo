import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-nested',
    templateUrl: 'nested.component.html',
    styles: []
})
export class NestedComponent {

    @Input() firstVariableNested;

    @Input() secondVariableNested;
    @Output() secondVariableNestedChange = new EventEmitter<string>();

    @Output() buttonClicked = new EventEmitter<string>();

    onButtonClick(buttonName: string) {
        this.buttonClicked.emit(buttonName);
    }

    // getter
    get secondVariableLocal() {
        return this.secondVariableNested;
    }

    // setter
    set secondVariableLocal(newValue: string) {
        this.secondVariableNested = newValue;
        this.secondVariableNestedChange.emit(this.secondVariableNested);
    }

    onSecondVariableNestedChange() {
        this.secondVariableNestedChange.emit(this.secondVariableNested);
    }
}
