import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss'
})
export class FeaturesComponent {

    constructor (
        public router: Router
    ) {}

}