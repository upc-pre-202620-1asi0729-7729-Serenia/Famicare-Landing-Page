import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HighlightsSectionComponent } from '../highlights-section/highlights-section.component';
import { FeaturesSectionComponent } from '../features-section/features-section.component';
import { HowItWorksSectionComponent } from '../how-it-works-section/how-it-works-section.component';
import { ClientFeaturesSectionComponent } from '../client-features-section/client-features-section.component';
import { OpensourceSectionComponent } from '../opensource-section/opensource-section.component';
import { AboutTeamSectionComponent } from '../about-team-section/about-team-section.component';
import { ContactSection } from '../contact-section/contact-section.component';
import { FooterSection } from '../footer-section/footer-section.component';


@Component({
  selector: 'app-layout',
  imports: [
    HeroSectionComponent,
    HighlightsSectionComponent,
    FeaturesSectionComponent,
    HowItWorksSectionComponent,
    ClientFeaturesSectionComponent,
    OpensourceSectionComponent,
    AboutTeamSectionComponent,
    ContactSection,
    FooterSection],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
