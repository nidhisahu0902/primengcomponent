import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {
images:[];
  constructor() { }

  getImages()
  {
    return this.images;
  }
}
