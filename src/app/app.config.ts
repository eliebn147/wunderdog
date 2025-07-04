import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {routes} from './app.routes';
import preset from './primeng/theme-preset';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes), provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: preset,
        options: {
          darkModeSelector: false || 'none'
        }
      }
    })
  ]
};
