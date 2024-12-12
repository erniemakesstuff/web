import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

    images = [
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