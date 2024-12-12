import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-integration',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './integration.component.html',
    styleUrl: './integration.component.scss'
})
export class IntegrationComponent {}