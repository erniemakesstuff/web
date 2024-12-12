import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { NewFeaturesComponent } from '../../common/new-features/new-features.component';
import { ServicesComponent } from '../../common/services/services.component';
import { WorkProcessComponent } from '../../common/work-process/work-process.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { GalleryComponent } from '../../common/gallery/gallery.component';
import { ProductsComponent } from '../../common/products/products.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-product-landing',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, FeaturesComponent, NewFeaturesComponent, ServicesComponent, WorkProcessComponent, HowItWorksComponent, GalleryComponent, ProductsComponent, BlogComponent, FeedbackComponent, DownloadAppComponent, IntegrationComponent, FooterComponent, BackToTopComponent],
    templateUrl: './product-landing.component.html',
    styleUrl: './product-landing.component.scss'
})
export class ProductLandingComponent {}