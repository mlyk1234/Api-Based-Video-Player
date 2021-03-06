import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { VdoPlayerComponent } from './vdo-player/vdo-player.component';
import { HttpClientModule } from  '@angular/common/http';
import { NgxVideoListPlayerModule } from 'ngx-video-list-player';
import { NgxPlayerComponent } from './ngx-playerr/ngx-player.component';
import { VdoPlayerDetectedComponent } from './vdo-player-detected/vdo-player-detected.component';
import { TableComponent } from './Sample/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VdoPlayerComponent,
    VdoPlayerDetectedComponent,
    NgxPlayerComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    NzDividerModule,
    NzTableModule,
    NgxVideoListPlayerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
