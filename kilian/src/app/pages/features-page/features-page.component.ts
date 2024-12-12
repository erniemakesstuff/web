import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { DiscoverComponent } from '../../common/discover/discover.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-features-page',
    standalone: true,
    imports: [NavbarComponent, PageBannerComponent, FeaturesComponent, DiscoverComponent, IntegrationComponent, FooterComponent, BackToTopComponent],
    templateUrl: './features-page.component.html',
    styleUrl: './features-page.component.scss'
})
export class FeaturesPageComponent {}