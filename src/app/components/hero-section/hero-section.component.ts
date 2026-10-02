import { Component, HostListener, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  imports: [LanguageSwitcher, TranslatePipe, IconComponent],
})
export class HeroSectionComponent {
  readonly heroImage =
    'https://images.unsplash.com/photo-1607288835534-9170f1302fe1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200';

  readonly navItems = [
    { labelKey: 'nav.howItWorks', href: '#como-funciona' },
    { labelKey: 'nav.benefits', href: '#beneficios' },
    { labelKey: 'nav.opensource', href: '#opensource' },
    { labelKey: 'nav.about', href: '#nosotros' },
  ];

  checkKeys = [0, 1, 2].map(i => `hero.checks.${i}`);
  menuOpen = signal(false);

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMenu(): void  { this.menuOpen.set(false); }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.menuOpen()) this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
