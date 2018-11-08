import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
//import { CsClassesComponent } from './portfolio-page/cs-classes/cs-classes.component';
import { ClassesComponent } from './portfolio/classes/classes.component';
import { PhpBlogComponent } from './portfolio/php-blog/php-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PortfolioComponent,
    NotFoundComponent,
    PortfolioPageComponent,
    //CsClassesComponent,
    ClassesComponent,
    PhpBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
