import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleGroup, MatButtonToggle, TranslatePipe],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  currentLang = 'es';
  languages = ['es', 'en'];

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang ?? this.translate.getDefaultLang();
  }

  useLanguage(language: string) {
    this.currentLang = language;
    this.translate.use(language);
    document.documentElement.lang = language;
  }
}
