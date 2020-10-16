import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TechawaySharedModule } from 'app/shared/shared.module';
import { TechawayCoreModule } from 'app/core/core.module';
import { TechawayAppRoutingModule } from './app-routing.module';
import { TechawayHomeModule } from './home/home.module';
import { TechawayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TechawaySharedModule,
    TechawayCoreModule,
    TechawayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TechawayEntityModule,
    TechawayAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TechawayAppModule {}
