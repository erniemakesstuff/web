import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-new-features',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './new-features.component.html',
    styleUrl: './new-features.component.scss'
})
export class NewFeaturesComponent {}