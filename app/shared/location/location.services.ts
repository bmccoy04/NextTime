import { Injectable } from '@angular/core';
//import {Location} from "nativescript-geolocation";
var geolocation = require("nativescript-geolocation");

@Injectable()
export class LocationService {
    public longitude: number = 11;
    public latitude: number = 10;
    public locationEnabled: any;
    constructor() {        
        this.locationEnabled = geolocation.isEnabled();
     }
     
     public getCurrentLocation(){
         if(!this.locationEnabled)
          {
              this.enableLocationRequest();
              this.getCurrentLocation();
          } 
     }
     
     public enableLocationRequest(){
         if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
     }

}