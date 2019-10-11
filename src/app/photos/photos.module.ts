import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';
import { PhotosEditComponent } from './photos-edit/photos-edit.component';
import { PhotosListComponent } from './photos-list/photos-list.component';



@NgModule({
  declarations: [PhotosDetailComponent, PhotosEditComponent, PhotosListComponent],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
