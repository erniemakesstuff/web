import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-recent-works',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './recent-works.component.html',
    styleUrl: './recent-works.component.scss'
})
export class RecentWorksComponent {

    recentWorksSlides: OwlOptions = {
		rtl: true,
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
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
				items: 4
			}
		}
    }

}