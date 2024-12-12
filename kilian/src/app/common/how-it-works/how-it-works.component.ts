import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-how-it-works',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './how-it-works.component.html',
    styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

    constructor (
        public router: Router
    ) {}

}