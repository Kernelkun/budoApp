import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ImageColorProvider {
  baseUrl = 'https://api.sightengine.com/1.0/properties.json?api_user=135840456&api_secret=qhhw5rpfs8wkEuuw2Wj3&url=';
  

  constructor(public http: HttpClient) {}

  getMayorColor(url) {
    return this.http.get(this.baseUrl + url);
  }
}
