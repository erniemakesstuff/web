import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-screenshots',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgClass, NgIf],
    templateUrl: './screenshots.component.html',
    styleUrl: './screenshots.component.scss'
})
export class ScreenshotsComponent {

	constructor (
        public router: Router
    ) {}

	// Owl Carousel
    screenshotsSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
        center: true,
		autoplay: false,
        mouseDrag: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
            "<i class='icofont-bubble-left'></i>",
            "<i class='icofont-bubble-right'></i>"
		],
        responsive: {
			0: {
				items: 1
			},
			515: {
				items: 1
			},
			695: {
				items: 2
			},
			935: {
				items: 3
			},
			1115: {
				items: 3
			}
		}
    }

}