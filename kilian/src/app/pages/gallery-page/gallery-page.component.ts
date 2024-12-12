import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-gallery-page',
    standalone: true,
    imports: [RouterLink, NgIf, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './gallery-page.component.html',
    styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {

    images = [
        'img/gallery1.jpg',
        'img/gallery2.jpg',
        'img/gallery3.jpg',
        'img/gallery4.jpg',
        'img/gallery5.jpg',
        'img/gallery6.jpg',
        'img/gallery7.jpg',
        'img/gallery8.jpg',
        'img/gallery1.jpg',
        'img/gallery2.jpg',
        'img/gallery3.jpg',
        'img/gallery4.jpg',
        'img/gallery5.jpg',
        'img/gallery6.jpg',
        'img/gallery7.jpg',
        'img/gallery8.jpg',
        // Add more images here
    ];
    selectedImage: string | null = null;
    openPopup(image: string): void {
        this.selectedImage = image;
    }
    closePopup(): void {
        this.selectedImage = null;
    }

}