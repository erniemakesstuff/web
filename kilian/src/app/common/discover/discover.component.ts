import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-discover',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './discover.component.html',
    styleUrl: './discover.component.scss'
})
export class DiscoverComponent {

    constructor (
        public router: Router
    ) {}

}