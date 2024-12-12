import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-coming-soon-page',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './coming-soon-page.component.html',
    styleUrl: './coming-soon-page.component.scss'
})
export class ComingSoonPageComponent {}