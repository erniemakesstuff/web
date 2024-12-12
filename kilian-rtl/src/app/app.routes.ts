import { Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SaasLandingComponent } from './demos/saas-landing/saas-landing.component';
import { AppLandingComponent } from './demos/app-landing/app-landing.component';
import { DigitalMarketingComponent } from './demos/digital-marketing/digital-marketing.component';
import { ProductLandingComponent } from './demos/product-landing/product-landing.component';
import { SoftwareLandingComponent } from './demos/software-landing/software-landing.component';
import { BookLandingComponent } from './demos/book-landing/book-landing.component';
import { StartupAgencyComponent } from './demos/startup-agency/startup-agency.component';
import { PaymentProcessingComponent } from './demos/payment-processing/payment-processing.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: SaasLandingComponent},
    {path: 'index-2', component: AppLandingComponent},
    {path: 'index-3', component: DigitalMarketingComponent},
    {path: 'index-4', component: ProductLandingComponent},
    {path: 'index-5', component: SoftwareLandingComponent},
    {path: 'index-6', component: BookLandingComponent},
    {path: 'index-7', component: StartupAgencyComponent},
    {path: 'index-8', component: PaymentProcessingComponent},
    {path: 'about-us', component: AboutPageComponent},
    {path: 'features', component: FeaturesPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'portfolio', component: PortfolioPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'contact-us', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];