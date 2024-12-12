import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BoxesComponent } from './boxes/boxes.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { ServicesComponent } from '../../common/services/services.component';
import { DiscoverComponent } from '../../common/discover/discover.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-payment-processing',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, BoxesComponent, FeaturesComponent, HowItWorksComponent, ServicesComponent, DiscoverComponent, CtaComponent, GetStartedComponent, IntegrationComponent, FeedbackComponent, PartnersComponent, FooterComponent, BackToTopComponent],
    templateUrl: './payment-processing.component.html',
    styleUrl: './payment-processing.component.scss'
})
export class PaymentProcessingComponent {}