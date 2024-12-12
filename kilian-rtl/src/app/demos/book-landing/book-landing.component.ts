import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { DiscoverComponent } from '../../common/discover/discover.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { ScreenshotsComponent } from '../../common/screenshots/screenshots.component';
import { TeamComponent } from '../../common/team/team.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { ConnectCommunityComponent } from '../../common/connect-community/connect-community.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-book-landing',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, PartnersComponent, DiscoverComponent, FeaturesComponent, FunfactsComponent, ScreenshotsComponent, TeamComponent, PricingComponent, FeedbackComponent, BlogComponent, ConnectCommunityComponent, IntegrationComponent, FooterComponent, BackToTopComponent],
    templateUrl: './book-landing.component.html',
    styleUrl: './book-landing.component.scss'
})
export class BookLandingComponent {}