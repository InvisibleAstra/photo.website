import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { AppBarComponent } from './home/app-bar/app-bar.component';
import { PreviewCardComponent } from './home/preview-card/preview-card.component';
import { CardAreaComponent } from './home/card-area/card-area.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoAreaComponent } from './gallery/photo-area/photo-area.component';
import { PhotoComponent } from './gallery/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AppBarComponent,
    PreviewCardComponent,
    CardAreaComponent,
    GalleryComponent,
    PhotoAreaComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
