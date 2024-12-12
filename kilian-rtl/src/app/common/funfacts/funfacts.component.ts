import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './funfacts.component.html',
    styleUrl: './funfacts.component.scss'
})
export class FunfactsComponent {

    constructor (
        public router: Router
    ) {}

}