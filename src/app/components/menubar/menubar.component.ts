import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html',
  styles: []
})
export class MenubarComponent implements OnInit {

    public menuItems = [
        {label: 'Nesting', url: '/nesting'}
    ];
    constructor() { }

    ngOnInit() {
    }

}
