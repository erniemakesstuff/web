import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { DiscoverComponent } from '../../common/discover/discover.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { ToolsComponent } from '../../common/tools/tools.component';
import { ScreenshotsComponent } from '../../common/screenshots/screenshots.component';
import { TeamComponent } from '../../common/team/team.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { ConnectCommunityComponent } from '../../common/connect-community/connect-community.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-app-landing',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, PartnersComponent, FeaturesComponent, HowItWorksComponent, DiscoverComponent, FunfactsComponent, ToolsComponent, ScreenshotsComponent, TeamComponent, PricingComponent, DownloadAppComponent, BlogComponent, FeedbackComponent, ConnectCommunityComponent, FooterComponent, BackToTopComponent],
    templateUrl: './app-landing.component.html',
    styleUrl: './app-landing.component.scss'
})
export class AppLandingComponent {}