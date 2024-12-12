import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-blog-details-page',
    standalone: true,
    imports: [RouterLink, NavbarComponent, PageBannerComponent, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './blog-details-page.component.html',
    styleUrl: './blog-details-page.component.scss'
})
export class BlogDetailsPageComponent {}