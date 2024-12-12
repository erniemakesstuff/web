import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-get-started',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './get-started.component.html',
    styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {

    constructor (
        public router: Router
    ) {}

}