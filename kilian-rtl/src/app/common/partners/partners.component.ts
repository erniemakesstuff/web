import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partners',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss'
})
export class PartnersComponent {

    partnersSlides: OwlOptions = {
		rtl: true,
		nav: false,
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
				items: 2
			},
			515: {
				items: 3
			},
			695: {
				items: 4
			},
			935: {
				items: 5
			},
			1115: {
				items: 5
			}
		}
    }

}