import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { DiscoverComponent } from '../../common/discover/discover.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { ToolsComponent } from '../../common/tools/tools.component';
import { RecentWorksComponent } from '../../common/recent-works/recent-works.component';
import { TeamComponent } from '../../common/team/team.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-startup-agency',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, PartnersComponent, FeaturesComponent, DiscoverComponent, FunfactsComponent, ToolsComponent, RecentWorksComponent, TeamComponent, PricingComponent, DownloadAppComponent, BlogComponent, CtaComponent, FeedbackComponent, GetStartedComponent, IntegrationComponent, FooterComponent, BackToTopComponent],
    templateUrl: './startup-agency.component.html',
    styleUrl: './startup-agency.component.scss'
})
export class StartupAgencyComponent {}