import {Component} from '@angular/core';

export type SomeType = string | number;

@Component({
               selector: 'app-root',
               template: `
                   <h1 *ngIf="one === two">
                       {{title}}
                   </h1>
                   
               `
           })
export class AppComponent<T extends SomeType> {
    title = 'app works!';

    one: T;
    two: SomeType;

    constructor() {
        console.log(this.one === this.two);
    }
}
