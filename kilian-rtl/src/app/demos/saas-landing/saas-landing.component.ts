import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { DiscoverComponent } from '../../common/discover/discover.component';
import { JoinNowComponent } from '../../common/join-now/join-now.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { ToolsComponent } from '../../common/tools/tools.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { WorkProcessComponent } from '../../common/work-process/work-process.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-saas-landing',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, FeaturesComponent, DiscoverComponent, JoinNowComponent, CtaComponent, ToolsComponent, FunfactsComponent, WorkProcessComponent, PricingComponent, GetStartedComponent, FeedbackComponent, PartnersComponent, FooterComponent, BackToTopComponent],
    templateUrl: './saas-landing.component.html',
    styleUrl: './saas-landing.component.scss'
})
export class SaasLandingComponent {}