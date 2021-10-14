import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexhomeComponent } from './components/indexhome/indexhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SvgsComponent } from './components/svgs/svgs.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';
import { AppDevelopmentComponent } from './components/app-development/app-development.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexhomeComponent,
    NavbarComponent,
    SvgsComponent,
    FooterComponent,
    OurServicesComponent,
    WebDevelopmentComponent,
    AppDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }