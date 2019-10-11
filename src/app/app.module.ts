import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ComentsEditComponent } from './comments/coments-edit/coments-edit.component';
import { ComentsListComponent } from './comments/coments-list/coments-list.component';
import { ComentsDetailComponent } from './comments/coments-detail/coments-detail.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailComponent } from './albums/albums-detail/albums-detail.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumsEditComponent } from './albums/albums-edit/albums-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ComentsEditComponent,
    ComentsListComponent,
    ComentsDetailComponent,
    AlbumsComponent,
    AlbumsDetailComponent,
    AlbumsListComponent,
    AlbumsEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
