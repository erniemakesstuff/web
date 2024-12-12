import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { OverviewComponent } from '../../common/overview/overview.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { ToolsComponent } from '../../common/tools/tools.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { DiscoverComponent } from '../../common/discover/discover.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { IntegrationComponent } from '../../common/integration/integration.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-software-landing',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, PartnersComponent, FeaturesComponent, OverviewComponent, CtaComponent, ToolsComponent, FunfactsComponent, DiscoverComponent, GetStartedComponent, BlogComponent, DownloadAppComponent, IntegrationComponent, FooterComponent, BackToTopComponent],
    templateUrl: './software-landing.component.html',
    styleUrl: './software-landing.component.scss'
})
export class SoftwareLandingComponent {}