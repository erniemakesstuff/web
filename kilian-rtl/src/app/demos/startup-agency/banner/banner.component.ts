import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink, NgIf, CarouselModule],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

    // Owl Carousel
    bannerSlides: OwlOptions = {
        items: 1,
		rtl: true,
		nav: true,
		margin: 0,
		loop: true,
		dots: false,
		autoplay: true,
        mouseDrag: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
            "<i class='icofont-bubble-left'></i>",
            "<i class='icofont-bubble-right'></i>"
		]
    }

}