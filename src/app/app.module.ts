import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WflowIconModule, wiconCoins } from 'projects/wflow-icon/src/public-api';
import { WflowIconRegistry } from 'projects/wflow-icon/src/lib/wflow-icon.registry';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WflowIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private wIconRegistry: WflowIconRegistry) {
    this.wIconRegistry.registerIcon([
      wiconCoins,
    ]);
  }
}
