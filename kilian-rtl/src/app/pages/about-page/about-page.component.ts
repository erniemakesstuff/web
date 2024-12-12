import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { TeamComponent } from '../../common/team/team.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [RouterLink, NavbarComponent, PageBannerComponent, TeamComponent, CtaComponent, FeedbackComponent, PartnersComponent, IntegrationComponent, FooterComponent, BackToTopComponent],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {}