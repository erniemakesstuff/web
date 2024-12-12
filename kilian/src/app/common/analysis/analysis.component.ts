import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-analysis',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './analysis.component.html',
    styleUrl: './analysis.component.scss'
})
export class AnalysisComponent {}