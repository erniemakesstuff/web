import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-work-process',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './work-process.component.html',
    styleUrl: './work-process.component.scss'
})
export class WorkProcessComponent {

    constructor (
        public router: Router
    ) {}

}