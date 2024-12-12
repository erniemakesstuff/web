import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {

    constructor (
        public router: Router
    ) {}

}