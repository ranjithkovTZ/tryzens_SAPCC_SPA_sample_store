import { NgModule } from '@angular/core';
import { CdsConfig, CdsModule } from '@spartacus/cds';
import { provideConfig } from '@spartacus/core';

@NgModule({
  imports: [CdsModule.forRoot()],
  providers: [
    provideConfig(<CdsConfig>{
      cds: {
        tenant: 'htp746682007',
        baseUrl: 'https://htp746682007.us.context.cloud.sap/',
        endpoints: {
          strategyProducts:
            '/strategy/${tenant}/strategies/${strategyId}/products',
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
        },
      },
    }),
  ],
})
export class CdsFeatureModule {}
