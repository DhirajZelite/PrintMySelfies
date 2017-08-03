import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoProvider {
  photos:any;
  constructor(public http: Http) {
    this.photos = [];
  }

  getPhotos()
  {
    return Promise.resolve(this.photos);
  }

  addPhotos(photo)
  {
    this.photos.push(photo);
  }

  refresh()
  {
    this.photos = [];
  }
}
