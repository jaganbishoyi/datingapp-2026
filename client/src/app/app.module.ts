import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'src/layout/nav/layout.module';
import { FeaturesModule } from 'src/features/features.module';
import { InitService } from 'src/core/services/init.service';
import { lastValueFrom } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FeaturesModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (initService: InitService) => {
        return () =>
          new Promise<void>((resolve) => {
            setTimeout(async () => {
              try {
                await lastValueFrom(initService.init());
              } finally {
                const splash = document.getElementById('initial-splash');
                if (splash) {
                  splash.remove();
                }
                resolve();
              }
            }, 500);
          });
      },
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
