import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageComponent } from './page/page.component';
import { ShopComponent } from './shop/shop.component';
import { VideosComponent } from './videos/videos.component';
import { SaleComponent } from './sale/sale.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageComponent,
    ShopComponent,
    VideosComponent,
    SaleComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: MainComponent},
      {path: "plant", component: PageComponent},
      {path: "shop", component: ShopComponent},
      {path: "videos", component: VideosComponent},
      {path: "sale", component: SaleComponent},
      {path: "blog", component: BlogComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
