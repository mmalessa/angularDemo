import {Component} from '@angular/core';

@Component({
    selector: 'app-menubar',
    templateUrl: 'menubar.component.html',
    styles: []
})
export class MenubarComponent {

    public menuItems = [
        {label: 'Home', url: '/'},
        {label: 'Nesting', url: '/nesting'}
    ];
}
