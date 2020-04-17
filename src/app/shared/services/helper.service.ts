import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  isWebpSupported: boolean = undefined;

  constructor() {}

  //Check whether the image has an _tiny in the filename
  // isTinyImage(src: string) {
  //   if(src.search('_tiny') !== -1) {
  //     return true;
  //   }
  //   return false;
  // }

  // isImageCached(src: string) {
  //   var image = new Image();
  //   image.src = src;
  //   return image.complete;
  // }

  // onLoadImage(id) {
  //   let element = document.getElementById(id);
  //   if(this.isTinyImage(element['src'])) {
  //     console.log(`Add image-loaded-tiny for: ${element['src']}`);
  //     element.classList.add('image-loaded-tiny');
  //   }else{
  //     console.log(`Add image-loaded-high for: ${element['src']}`);
  //     element.classList.add('image-loaded-high');
  //   }
  // }

}
