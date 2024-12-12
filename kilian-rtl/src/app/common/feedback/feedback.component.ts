import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgIf, NgClass],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

	constructor (
        public router: Router
    ) {}

	// Owl Carousel
    feedbackSlides: OwlOptions = {
		rtl: true,
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
        center: true,
		autoplay: true,
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