import { NgModule } from '@angular/core';
import { CdsConfig, CdsModule } from '@spartacus/cds';
import {
  cdsTranslationChunksConfig,
  cdsTranslationsEn,
} from '@spartacus/cds/assets';
import { I18nConfig, provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [CdsModule.forRoot()],
  providers: [
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: cdsTranslationsEn },
        chunks: cdsTranslationChunksConfig,
      },
    }),
    provideConfig(<CdsConfig>{
      cds: {
        tenant: 'htp746682007',
        baseUrl: 'https://htp746682007-powertools-spa.api.us.context.cloud.sap',
        consentTemplateId: 'PROFILE',
        endpoints: {
          strategyProducts:
            '/strategy/v1/sites/${baseSite}/strategies/${strategyId}/products',
          searchIntelligence:
            '/search-intelligence/v1/sites/${cdsSiteId}/trendingSearches',
        },
        merchandising: {
          defaultCarouselViewportThreshold: 80,
        },
      },
    }),
    provideConfig(<CdsConfig>{
      cds: {
        profileTag: {
          javascriptUrl:
            'https://tag.static.us.context.cloud.sap/js/profile-tag.js',
          configUrl:
            'https://tag.static.us.context.cloud.sap/config/htp746682007-powertools-spa-default',
          allowInsecureCookies: true,
          sciEnabled: true,
        },
      },
    }),
  ],
})
export class CdsFeatureModule {}
