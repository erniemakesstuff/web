import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent {

    productsSlides: OwlOptions = {
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
				items: 3
			}
		}
    }

}