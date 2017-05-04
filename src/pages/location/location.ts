import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  map: GoogleMap;
  location = new LatLng(3.158800,101.757446);

  constructor(public navCtrl: NavController, public platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    
    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': this.location,
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
    });
  }


ionViewDidLoad() {
  console.log('ionViewDidLoad Login');
}

}











