import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss'
})
export class PricingComponent {

    constructor (
        public router: Router
    ) {}

}