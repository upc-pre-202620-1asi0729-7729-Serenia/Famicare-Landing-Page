import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'footer-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, IconComponent],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSection {
  year: number = new Date().getFullYear();

  links = [
    { labelKey: 'footer.links.benefits',   href: '#beneficios' },
    { labelKey: 'footer.links.howItWorks', href: '#como-funciona' },
    { labelKey: 'footer.links.opensource', href: '#opensource' },
    { labelKey: 'footer.links.about',      href: '#nosotros' },
  ];
}
