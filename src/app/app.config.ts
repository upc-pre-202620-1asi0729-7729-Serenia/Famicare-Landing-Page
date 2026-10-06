import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // anchorScrolling: permite que los enlaces #beneficios, #acceso... de la landing hagan scroll
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled' })),
    // El header es fijo (5rem): el router deja las secciones justo debajo de él al saltar a un ancla.
    provideAppInitializer(() => inject(ViewportScroller).setOffset([0, 80])),
    provideAnimations(),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json'
      }),
      // La landing está escrita en español: es el idioma inicial y el de respaldo.
      lang: 'es',
      fallbackLang: 'es',
    })

  ]
};
