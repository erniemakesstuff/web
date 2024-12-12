import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { ServicesComponent } from '../../common/services/services.component';
import { WorkProcessComponent } from '../../common/work-process/work-process.component';
import { JoinNowComponent } from '../../common/join-now/join-now.component';
import { AnalysisComponent } from '../../common/analysis/analysis.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { RecentWorksComponent } from '../../common/recent-works/recent-works.component';
import { TeamComponent } from '../../common/team/team.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-digital-marketing',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, PartnersComponent, FeaturesComponent, ServicesComponent, WorkProcessComponent, JoinNowComponent, AnalysisComponent, FunfactsComponent, RecentWorksComponent, TeamComponent, PricingComponent, BlogComponent, FeedbackComponent, GetStartedComponent, IntegrationComponent, FooterComponent, BackToTopComponent],
    templateUrl: './digital-marketing.component.html',
    styleUrl: './digital-marketing.component.scss'
})
export class DigitalMarketingComponent {}